class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="bg-awanaRed text-white text-xs sm:text-sm font-bold text-center py-2.5 px-6 shadow-sm tracking-wide">
          2026 program runs from September 3, 2026 - May 6, 2027 every Thursday 6:30 to 8:05 pm
      </div>
      <nav class="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-md">
          <div class="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
              <a href="index.html" class="flex items-center space-x-3">
                  <img src="https://clubs.awana.org/wp-content/uploads/2025/04/awana-clubs-logo-color-1.jpg" alt="Awana Clubs Logo" class="h-12 w-auto object-contain">
                  <div class="h-6 w-px bg-slate-200 hidden sm:block"></div>
                  <span class="text-xs font-black text-slate-400 uppercase tracking-widest pt-0.5 hidden sm:inline">Stamford</span>
              </a>
              <div class="hidden md:flex space-x-8 font-semibold text-sm text-slate-600">
                  <a href="index.html#how-it-works" class="hover:text-awanaRed transition">What to Expect</a>
                  <a href="index.html#clubs" class="hover:text-awanaRed transition">Clubs</a>
                  <a href="index.html#location-time" class="hover:text-awanaRed transition">Time & Location</a>
                  <a href="directors.html" class="hover:text-awanaRed transition">Leadership</a>
              </div>
              <a href="index.html#register" class="bg-awanaNavy text-white px-5 py-2.5 rounded-lg font-bold hover:bg-slate-800 transition text-xs tracking-wider uppercase shadow-sm">Register</a>
          </div>
      </nav>
    `;
  }
}

customElements.define('site-navbar', SiteNavbar);
