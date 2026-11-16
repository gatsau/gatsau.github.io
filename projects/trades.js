// Trade log for the news-trading bot.
// To update the site: add a new line at the end of `trades`. Balance, stats, chart and table all recalculate.
window.TRADES = {
  start: 1000,
  trades: [
    { date: '2026-10-29', asset: 'HYPE', side: 'long',  exit: 'Trailing stop',  pnl: 326 },
    { date: '2026-10-29', asset: 'BTC',  side: 'short', exit: 'Trailing stop',  pnl: 461 },
    { date: '2026-10-29', asset: 'AAVE', side: 'short', exit: 'Initial stop',   pnl: -101 },
    { date: '2026-10-29', asset: 'XRP',  side: 'short', exit: 'Trailing stop',  pnl: 329 },
    { date: '2026-10-30', asset: 'ARB',  side: 'short', exit: 'Initial stop',   pnl: -100 },
    { date: '2026-11-03', asset: 'HYPE', side: 'long',  exit: 'Trailing stop',  pnl: 7 },
    { date: '2026-11-03', asset: 'HYPE', side: 'long',  exit: 'Breakeven stop', pnl: 0 },
    { date: '2026-11-05', asset: 'HYPE', side: 'long',  exit: 'Initial stop',   pnl: -64 },
    { date: '2026-11-06', asset: 'MSFT', side: 'long',  exit: 'Breakeven stop', pnl: 0 },
    { date: '2026-11-09', asset: 'AVAX', side: 'long',  exit: 'Trailing stop',  pnl: 200 },
    { date: '2026-11-10', asset: 'HYPE', side: 'long',  exit: 'Trailing stop',  pnl: 96 },
    { date: '2026-11-11', asset: 'MSTR', side: 'short', exit: 'Trailing stop',  pnl: 5 },
    { date: '2026-11-11', asset: 'NVDA', side: 'short', exit: 'Initial stop',   pnl: -100 },
    { date: '2026-11-12', asset: 'NVDA', side: 'short', exit: 'Trailing stop',  pnl: 146 },
  ],
};
