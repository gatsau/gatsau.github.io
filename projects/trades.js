// Trade log for the news-trading bot.
// To update the site: add a new line at the end of `trades`. Balance, stats, chart and table all recalculate.
window.TRADES = {
  start: 1000,
  trades: [
    { date: '2026-10-23', asset: 'INIT', side: 'short', exit: 'Trailing stop', pnl: 161 },
    { date: '2026-10-26', asset: 'HYPE', side: 'long',  exit: 'Initial stop',  pnl: -90 },
    { date: '2026-10-27', asset: 'XRP',  side: 'long',  exit: 'Initial stop',  pnl: -73 },
    { date: '2026-10-29', asset: 'BTC',  side: 'short', exit: 'Trailing stop', pnl: 461 },
    { date: '2026-11-05', asset: 'AAVE', side: 'long',  exit: 'Initial stop',  pnl: -55 },
    { date: '2026-11-06', asset: 'CRWV', side: 'short', exit: 'Trailing stop', pnl: 194 },
    { date: '2026-11-09', asset: 'NVDA', side: 'short', exit: 'Trailing stop', pnl: 243 },
    { date: '2026-11-11', asset: 'MSTR', side: 'short', exit: 'Trailing stop', pnl: 5 },
  ],
};
