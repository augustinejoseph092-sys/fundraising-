const toast = document.querySelector('.toast');
const nav = document.querySelector('.nav nav');
const wallets = {
  usdt: { address: 'TDxhCpVsfZWGFTjxJyH7kpjPjojgeKm7W7', network: 'USDT · TRON (TRC20)', warning: 'USDT on the TRON (TRC20) network' },
  btc: { address: '1Ae33JtvCTmiHhj7zqbvf19toDubCMEHEr', network: 'BTC · Bitcoin network', warning: 'BTC on the Bitcoin network' },
  sol: { address: '9CHiDRJjZpCxx5RZZguxjuoFu8ZhCeXd8yqdooyH8v9d', network: 'SOL · Solana network', warning: 'SOL on the Solana network' },
  eth: { address: '0x7598497e6d5d577430846d00ef0852bdf2c83fe0', network: 'ETH · Ethereum (ERC20)', warning: 'ETH or ERC20 assets on the Ethereum (ERC20) network' }
};
let activeWallet = wallets.usdt;
const addressEl = document.getElementById('wallet-address');
const networkEl = document.getElementById('network-label');
const assetEl = document.getElementById('asset-label');
document.querySelectorAll('[data-crypto]').forEach(button => button.addEventListener('click', () => {
  activeWallet = wallets[button.dataset.crypto];
  document.querySelectorAll('[data-crypto]').forEach(item => item.classList.toggle('selected', item === button));
  addressEl.textContent = activeWallet.address; networkEl.textContent = activeWallet.network; assetEl.textContent = activeWallet.warning;
}));
document.getElementById('copy-address').addEventListener('click', async event => {
  await navigator.clipboard.writeText(activeWallet.address); event.currentTarget.textContent = 'Copied!';
  setTimeout(() => event.currentTarget.textContent = 'Copy address', 1800);
});
document.querySelector('.menu-toggle').addEventListener('click', event => {
  nav.classList.toggle('open'); event.currentTarget.setAttribute('aria-expanded', nav.classList.contains('open'));
});
