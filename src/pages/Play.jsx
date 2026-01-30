import { useState, useEffect, useCallback, useRef } from 'react'
import './Play.css'

const GAME_WIDTH = 400
const GAME_HEIGHT = 500
const FISH_SIZE = 30
const HOOK_WIDTH = 50
const HOOK_GAP = 150
const GRAVITY = 0.5
const JUMP_STRENGTH = -6
const HOOK_SPEED = 3
const HOOK_COLLISION_PADDING = 12 // Makes hitbox smaller

function Play() {
  const [gameState, setGameState] = useState('start') // start, playing, gameOver
  const [fishY, setFishY] = useState(GAME_HEIGHT / 2)
  const [fishVelocity, setFishVelocity] = useState(0)
  const [hooks, setHooks] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('flappyFishHighScore')
    return saved ? parseInt(saved) : 0
  })
  const gameLoopRef = useRef(null)
  const gameAreaRef = useRef(null)

  const resetGame = useCallback(() => {
    setFishY(GAME_HEIGHT / 2)
    setFishVelocity(0)
    setHooks([])
    setScore(0)
  }, [])

  const startGame = useCallback(() => {
    resetGame()
    setGameState('playing')
  }, [resetGame])

  const jump = useCallback(() => {
    if (gameState === 'playing') {
      setFishVelocity(JUMP_STRENGTH)
    } else if (gameState === 'start' || gameState === 'gameOver') {
      startGame()
    }
  }, [gameState, startGame])

  // Handle keyboard and touch input
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault()
        jump()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [jump])

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return

    const gameLoop = () => {
      // Update fish position
      setFishVelocity(v => v + GRAVITY)
      setFishY(y => {
        const newY = y + fishVelocity
        // Check boundaries
        if (newY < 0 || newY > GAME_HEIGHT - FISH_SIZE) {
          setGameState('gameOver')
          return y
        }
        return newY
      })

      // Update hooks
      setHooks(currentHooks => {
        let newHooks = currentHooks
          .map(hook => ({ ...hook, x: hook.x - HOOK_SPEED }))
          .filter(hook => hook.x > -HOOK_WIDTH)

        // Add new hook
        if (newHooks.length === 0 || newHooks[newHooks.length - 1].x < GAME_WIDTH - 200) {
          const gapStart = Math.random() * (GAME_HEIGHT - HOOK_GAP - 100) + 20
          newHooks.push({
            x: GAME_WIDTH,
            gapStart,
            passed: false
          })
        }

        // Check collisions and scoring
        newHooks = newHooks.map(hook => {
          const fishLeft = 50 + 5  // Small padding for fish hitbox
          const fishRight = 50 + FISH_SIZE - 5
          const fishTop = fishY + 5
          const fishBottom = fishY + FISH_SIZE - 5

          const hookLeft = hook.x + HOOK_COLLISION_PADDING
          const hookRight = hook.x + HOOK_WIDTH - HOOK_COLLISION_PADDING

          // Check if fish passed the hook
          if (!hook.passed && hook.x + HOOK_WIDTH < 50) {
            setScore(s => s + 1)
            return { ...hook, passed: true }
          }

          // Check collision
          if (fishRight > hookLeft && fishLeft < hookRight) {
            if (fishTop < hook.gapStart || fishBottom > hook.gapStart + HOOK_GAP) {
              setGameState('gameOver')
            }
          }

          return hook
        })

        return newHooks
      })

      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop)

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [gameState, fishVelocity, fishY])

  // Update high score
  useEffect(() => {
    if (gameState === 'gameOver' && score > highScore) {
      setHighScore(score)
      localStorage.setItem('flappyFishHighScore', score.toString())
    }
  }, [gameState, score, highScore])

  return (
    <div className="play">
      {/* Hero Section */}
      <section className="play-hero">
        <div className="container">
          <h1>Flappy Fish</h1>
          <p>Help our fish dodge the fishing hooks!</p>
        </div>
      </section>

      {/* Game Section */}
      <section className="section game-section">
        <div className="container">
          <div className="game-wrapper">
            <div className="score-display">
              <span>Score: {score}</span>
              <span>Best: {highScore}</span>
            </div>
            
            <div 
              className="game-area"
              ref={gameAreaRef}
              onClick={jump}
              onTouchStart={(e) => { e.preventDefault(); jump(); }}
              style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
            >
              {/* Water background effects */}
              <div className="water-bg">
                <div className="bubble bubble-1"></div>
                <div className="bubble bubble-2"></div>
                <div className="bubble bubble-3"></div>
              </div>

              {/* Fish */}
              <div 
                className="fish"
                style={{ 
                  top: fishY,
                  left: 50,
                  transform: `scaleX(-1) rotate(${Math.min(Math.max(fishVelocity * 3, -30), 30)}deg)`
                }}
              >
                🐟
              </div>

              {/* Hooks */}
              {hooks.map((hook, index) => (
                <div key={index}>
                  {/* Top hook */}
                  <div 
                    className="hook hook-top"
                    style={{
                      left: hook.x,
                      height: hook.gapStart,
                      width: HOOK_WIDTH
                    }}
                  >
                    <div className="hook-line"></div>
                    <div className="hook-icon">🪝</div>
                  </div>
                  {/* Bottom hook */}
                  <div 
                    className="hook hook-bottom"
                    style={{
                      left: hook.x,
                      top: hook.gapStart + HOOK_GAP,
                      height: GAME_HEIGHT - hook.gapStart - HOOK_GAP,
                      width: HOOK_WIDTH
                    }}
                  >
                    <div className="hook-icon">🪝</div>
                    <div className="hook-line"></div>
                  </div>
                </div>
              ))}

              {/* Start Screen */}
              {gameState === 'start' && (
                <div className="game-overlay">
                  <h2>🐟 Flappy Fish 🪝</h2>
                  <p>Click or press Space to swim!</p>
                  <p>Avoid the fishing hooks!</p>
                  <button className="btn btn-primary" onClick={startGame}>
                    Start Game
                  </button>
                </div>
              )}

              {/* Game Over Screen */}
              {gameState === 'gameOver' && (
                <div className="game-overlay game-over">
                  <h2>Game Over!</h2>
                  <p className="final-score">Score: {score}</p>
                  {score >= highScore && score > 0 && (
                    <p className="new-high-score">🎉 New High Score! 🎉</p>
                  )}
                  <button className="btn btn-primary" onClick={startGame}>
                    Play Again
                  </button>
                </div>
              )}
            </div>

            <div className="game-instructions">
              <p>🖱️ Click / Tap or press ⌨️ Space / ↑ to swim up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section play-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <span>🎮</span>
              <h3>How to Play</h3>
              <p>Click, tap, or press Space to make the fish swim upward. Avoid the fishing hooks!</p>
            </div>
            <div className="info-card">
              <span>🏆</span>
              <h3>Beat Your Score</h3>
              <p>Your high score is saved locally. Can you beat it?</p>
            </div>
            <div className="info-card">
              <span>🍽️</span>
              <h3>Hungry?</h3>
              <p>After playing, visit one of our locations for real seafood!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Play
