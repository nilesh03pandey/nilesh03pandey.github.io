# 🏆 NEURAL BREACH — LEADERBOARD

> Top 10 highest scores are **automatically saved** in the game using persistent cloud storage (`window.storage`).  
> Scores are **shared across all sessions** — anyone who plays sees the same leaderboard.

---

## How Scores Are Saved

When a game ends, the player can:
1. Enter a **callsign** (up to 12 characters)
2. Click **REGISTER & REBOOT** (or press `Enter`)
3. Their score is saved and the leaderboard updates **instantly**

Alternatively, click **SKIP & REBOOT** to restart without saving.

---

## Score Calculation

| Action | Points |
|--------|--------|
| Kill — Basic enemy | 50 pts × combo multiplier |
| Kill — Shooter enemy | 100 pts × combo multiplier |
| Kill — Tank enemy | 150 pts × combo multiplier |
| Wave clear bonus | `wave × 500` pts |
| Combo multiplier | `1 + (combo × 0.5)` |

> **Combo** resets if you take a hit or let the timer expire (~2.5s between kills).

---

## Enemy Types

| Type | Color | Behavior | HP |
|------|-------|----------|----|
| Basic | 🔵 Cyan | Rushes player | Low |
| Shooter | 🔴 Magenta | Keeps distance, fires projectiles | Medium |
| Tank | 🟡 Yellow | Slow, very high HP, melee | High |

Shooter enemies appear from **Wave 4+**.  
Tank enemies appear from **Wave 7+**.

---

## Controls

| Input | Action |
|-------|--------|
| `W A S D` / Arrow Keys | Move |
| Mouse | Aim |
| Left Click (hold) | Shoot |
| `R` | Reload |
| `Shift` + direction | Dash (invincibility frames) |

---

## Storage Info

Scores are stored via `window.storage` (shared: `true`) — persisted in the Claude.ai artifact environment.  
The leaderboard holds a **maximum of 10 entries**, always sorted by score descending.

To view scores without playing, click **TOP SCORES** on the start screen.

---

*NEURAL BREACH // Built with the NP portfolio theme — cyan · magenta · yellow*
