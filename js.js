document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.getElementById("appContainer");

  // ================= 1. SIDEBAR DRAWER (SEMUA HALAMAN) =================
  const openMenuBtn = document.getElementById("openMenuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
  const berandaActions = document.getElementById("berandaHeaderActions");
  const topHeader = document.getElementById("topHeader");

  if (openMenuBtn) {
    openMenuBtn.addEventListener("click", () => {
      appContainer.classList.add("sidebar-open");
      if (berandaActions) berandaActions.style.display = "none";
      if (topHeader) topHeader.classList.add("centered-title");
    });
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", () => {
      appContainer.classList.remove("sidebar-open");
      if (berandaActions) berandaActions.style.display = "flex";
      if (topHeader) topHeader.classList.remove("centered-title");
    });
  }

  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", () => {
      appContainer.classList.toggle("sidebar-open");
    });
  }

  // ================= 2. HALAMAN DASHBOARD (PENCARIAN) =================
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const keyword = e.target.value.toLowerCase();
      document.querySelectorAll(".task-item-row").forEach((row) => {
        const title = row.dataset.title.toLowerCase();
        row.style.display = title.includes(keyword) ? "flex" : "none";
      });
    });
  }

  // ================= 3. HALAMAN EDIT / TAMBAH TUGAS =================
  const btnHapusTugas = document.getElementById("btnHapus");
  const btnSelesaiTugas = document.getElementById("btnSelesai");

  if (btnHapusTugas) {
    btnHapusTugas.addEventListener("click", () => {
      if (confirm("Hapus tugas ini?")) {
        window.location.href = "tugas1.html";
      }
    });
  }

  if (btnSelesaiTugas) {
    btnSelesaiTugas.addEventListener("click", () => {
      alert("Perubahan tugas berhasil disimpan!");
      window.location.href = "tugas1.html";
    });
  }

  // ================= 4. HALAMAN JADWAL (PILIH HARI) =================
  const dayButtons = document.querySelectorAll(".day-btn");
  if (dayButtons.length > 0) {
    dayButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        dayButtons.forEach((b) => b.classList.remove("selected"));
        e.currentTarget.classList.add("selected");
      });
    });
  }

  // ================= 5. HALAMAN EDIT JADWAL =================
  const btnHapusJadwal = document.getElementById("btnHapusJadwal");
  const btnSelesaiJadwal = document.getElementById("btnSelesaiJadwal");

  if (btnHapusJadwal) {
    btnHapusJadwal.addEventListener("click", () => {
      if (confirm("Hapus jadwal ini?")) {
        window.location.href = "jadwal2.html";
      }
    });
  }

  if (btnSelesaiJadwal) {
    btnSelesaiJadwal.addEventListener("click", () => {
      alert("Jadwal berhasil diperbarui!");
      window.location.href = "jadwal  2.html";
    });
  }

  // ================= 6. HALAMAN KALENDER =================
  const calendarGrid = document.getElementById("calendarGrid");
  const agendaDateTitle = document.getElementById("agendaDateTitle");

  if (calendarGrid && agendaDateTitle) {
    const dates = [
      28, 29, 30, 1, 2, 3, 4,
      5, 6, 7, 8, 9, 10, 11,
      12, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22, 23, 24, 25,
      26, 27, 28, 29, 30, 31, 1,
      2, 3, 4, 5, 6, 7, 8
    ];

    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

    dates.forEach((dateNum, idx) => {
      const cell = document.createElement("div");
      cell.className = "cal-date" + (dateNum === 13 && idx === 15 ? " active-date" : "");
      cell.textContent = dateNum;

      cell.addEventListener("click", () => {
        document.querySelectorAll(".cal-date").forEach((c) => c.classList.remove("active-date"));
        cell.classList.add("active-date");
        const dayName = dayNames[idx % 7];
        agendaDateTitle.textContent = `${dayName}, ${dateNum} Oktober 2026`;
      });

      calendarGrid.appendChild(cell);
    });
  }

  // ================= 7. HALAMAN PENGATURAN (VIEW PROFILE & LOGOUT) =================
  const viewNama = document.getElementById("viewNama");
  const btnLogout = document.getElementById("btnLogout");

  if (viewNama) {
    viewNama.value = localStorage.getItem("mhs_nama") || "";
    document.getElementById("viewNim").value = localStorage.getItem("mhs_nim") || "";
    document.getElementById("viewAlamat").value = localStorage.getItem("mhs_alamat") || "";
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      alert("Anda telah logout.");
      window.location.href = "dashboard.html";
    });
  }

  // ================= 8. HALAMAN EDIT PROFILE =================
  const editNama = document.getElementById("editNama");
  const btnSelesaiProfile = document.getElementById("btnSelesaiProfile");

  if (editNama) {
    editNama.value = localStorage.getItem("mhs_nama") || "";
    document.getElementById("editNim").value = localStorage.getItem("mhs_nim") || "";
    document.getElementById("editAlamat").value = localStorage.getItem("mhs_alamat") || "";
  }

  if (btnSelesaiProfile) {
    btnSelesaiProfile.addEventListener("click", () => {
      localStorage.setItem("mhs_nama", document.getElementById("editNama").value);
      localStorage.setItem("mhs_nim", document.getElementById("editNim").value);
      localStorage.setItem("mhs_alamat", document.getElementById("editAlamat").value);
      window.location.href = "pengaturan-1.html";
    });
  }

  // ================= 9. HALAMAN GANTI PASSWORD =================
  const btnSelesaiPassword = document.getElementById("btnSelesaiPassword");

  if (btnSelesaiPassword) {
    btnSelesaiPassword.addEventListener("click", () => {
      const passBaru = document.getElementById("passBaru").value;
      const passKonfirmasi = document.getElementById("passKonfirmasi").value;

      if (passBaru !== passKonfirmasi) {
        alert("Konfirmasi password tidak cocok!");
        return;
      }

      alert("Password berhasil diperbarui!");
      window.location.href = "pengaturan-1.html";
    });
  }
});