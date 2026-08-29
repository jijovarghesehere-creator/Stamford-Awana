class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Top Announcement Bar -->
      <div class="bg-[#e31b23] text-white text-xs sm:text-sm font-bold text-center py-2.5 px-6 shadow-sm tracking-wide">
          2026 program runs from September 3, 2026 - May 6, 2027 every Thursday 6:30 to 8:05 pm
      </div>

      <!-- Shared Navigation Bar -->
      <nav class="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-md">
          <div class="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
              <a href="index.html" class="flex items-center space-x-3">
                  <img src="https://clubs.awana.org/wp-content/uploads/2025/04/awana-clubs-logo-color-1.jpg" alt="Awana Clubs Logo" class="h-12 w-auto object-contain">
                  <div class="h-6 w-px bg-slate-200 hidden sm:block"></div>
                  <span class="text-xs font-black text-slate-400 uppercase tracking-widest pt-0.5 hidden sm:inline">Stamford</span>
              </a>
              
              <div class="hidden md:flex space-x-8 font-semibold text-sm text-slate-600">
                  <a href="index.html#how-it-works" class="hover:text-[#e31b23] transition">What to Expect</a>
                  <a href="index.html#clubs" class="hover:text-[#e31b23] transition">Clubs</a>
                  <a href="index.html#location-time" class="hover:text-[#e31b23] transition">Time & Location</a>
                  <a href="index.html#Live-Calendar" class="hover:text-[#e31b23] transition">Calendar</a>
                  
              </div>
              <a href="index.html#register" class="bg-[#112e51] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-slate-800 transition text-xs tracking-wider uppercase shadow-sm">Register</a>
          </div>
      </nav>
    `;
  }
}

// Bottom Mobile Navbar
class MobileNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] z-50 flex justify-around items-center px-2 py-2 pb-safe">
          <a href="index.html#how-it-works" class="flex flex-col items-center p-2 text-slate-500 hover:text-[#e31b23] transition">
              <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span class="text-[10px] font-bold">Discipleship</span>
          </a>
          <a href="index.html#clubs" class="flex flex-col items-center p-2 text-slate-500 hover:text-[#e31b23] transition">
              <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span class="text-[10px] font-bold">Clubs</span>
          </a>
          <a href="index.html#location-time" class="flex flex-col items-center p-2 text-slate-500 hover:text-[#e31b23] transition">
              <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span class="text-[10px] font-bold">Location</span>
          </a>
          <a href="index.html#register" class="flex flex-col items-center p-2 text-[#112e51] hover:text-[#e31b23] transition">
              <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              <span class="text-[10px] font-extrabold">Register</span>
          </a>
      </nav>
    `;
  }
}


customElements.define('site-navbar', SiteNavbar);
customElements.define('mobile-navbar', MobileNavbar);
