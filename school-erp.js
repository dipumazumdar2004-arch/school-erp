document.addEventListener("DOMContentLoaded", () => {
  const state = {
    currentUser: null,
    selectedSectionId: "overviewSection",
    classes: [
      { id: 1, className: "1", hasSections: true, sections: ["A", "B"] },
      { id: 2, className: "2", hasSections: true, sections: ["A", "B"] },
      { id: 3, className: "3", hasSections: false, sections: [] },
      { id: 4, className: "4", hasSections: true, sections: ["A"] },
      { id: 5, className: "5", hasSections: false, sections: [] },
      { id: 6, className: "6", hasSections: true, sections: ["A", "B"] },
      { id: 7, className: "7", hasSections: false, sections: [] },
      { id: 8, className: "8", hasSections: true, sections: ["A", "B"] },
      { id: 9, className: "9", hasSections: true, sections: ["A"] },
      { id: 10, className: "10", hasSections: false, sections: [] }
    ],
    users: [
      { id: 1, role: "admin", name: "Main Admin", email: "admin@school.com", password: "123456", active: true },
      { id: 2, role: "teacher", name: "Anita Sharma", email: "teacher@school.com", password: "123456", active: true },
      { id: 3, role: "student", name: "Rahul Das", email: "student@school.com", password: "123456", active: true },
      { id: 4, role: "teacher", name: "Bikash Roy", email: "bikash@school.com", password: "123456", active: true },
      { id: 5, role: "student", name: "Priya Kalita", email: "priya@school.com", password: "123456", active: true },
      { id: 6, role: "student", name: "Ritu Bora", email: "ritu@school.com", password: "123456", active: true }
    ],
    teachers: [
      { teacherId: 2, userId: 2, assignedClasses: ["8-A", "9-A"] },
      { teacherId: 4, userId: 4, assignedClasses: ["6-B", "10"] }
    ],
    students: [
      { studentId: 101, userId: 3, name: "Rahul Das", className: "8", section: "A", rollNo: 1 },
      { studentId: 102, userId: 5, name: "Priya Kalita", className: "8", section: "A", rollNo: 2 },
      { studentId: 103, userId: 6, name: "Ritu Bora", className: "10", section: "", rollNo: 1 }
    ],
    subjects: [
      { id: 1, className: "8", section: "A", names: ["English", "Maths", "Science", "Social Science"] },
      { id: 2, className: "10", section: "", names: ["English", "Maths", "General Science", "Social Science"] }
    ],
    timeLogs: [
      { id: 1, teacherId: 2, date: "2026-07-01", entryTime: "09:00", exitTime: "15:45" }
    ],
    attendance: [
      { id: 1, className: "8", section: "A", date: "2026-07-01", studentId: 101, status: "Present" },
      { id: 2, className: "8", section: "A", date: "2026-07-01", studentId: 102, status: "Absent" },
      { id: 3, className: "10", section: "", date: "2026-07-01", studentId: 103, status: "Present" }
    ],
    exams: [
      { id: "unit-test-1", examName: "Unit Test 1", year: "2026-2027" },
      { id: "half-yearly", examName: "Half Yearly", year: "2026-2027" },
      { id: "annual", examName: "Annual Exam", year: "2026-2027" }
    ],
    marks: [
      { id: 1, examId: "annual", studentId: 101, className: "8", section: "A", subject: "English", fullMarks: 100, obtainedMarks: 88 },
      { id: 2, examId: "annual", studentId: 101, className: "8", section: "A", subject: "Maths", fullMarks: 100, obtainedMarks: 92 },
      { id: 3, examId: "annual", studentId: 101, className: "8", section: "A", subject: "Science", fullMarks: 100, obtainedMarks: 85 },
      { id: 4, examId: "annual", studentId: 101, className: "8", section: "A", subject: "Social Science", fullMarks: 100, obtainedMarks: 90 },
      { id: 5, examId: "annual", studentId: 102, className: "8", section: "A", subject: "English", fullMarks: 100, obtainedMarks: 75 },
      { id: 6, examId: "annual", studentId: 102, className: "8", section: "A", subject: "Maths", fullMarks: 100, obtainedMarks: 80 },
      { id: 7, examId: "annual", studentId: 102, className: "8", section: "A", subject: "Science", fullMarks: 100, obtainedMarks: 78 },
      { id: 8, examId: "annual", studentId: 102, className: "8", section: "A", subject: "Social Science", fullMarks: 100, obtainedMarks: 82 },
      { id: 9, examId: "annual", studentId: 103, className: "10", section: "", subject: "English", fullMarks: 100, obtainedMarks: 81 },
      { id: 10, examId: "annual", studentId: 103, className: "10", section: "", subject: "Maths", fullMarks: 100, obtainedMarks: 73 }
    ],
    activities: [
      { id: 1, text: "Admin updated Class 8 sections.", time: "Today" },
      { id: 2, text: "Teacher Anita entered annual exam marks.", time: "Today" },
      { id: 3, text: "Student Rahul downloaded marksheet.", time: "Yesterday" }
    ]
  };

  const el = {
    loginScreen: byId("loginScreen"),
    appShell: byId("appShell"),
    loginForm: byId("loginForm"),
    roleSelect: byId("roleSelect"),
    emailInput: byId("emailInput"),
    passwordInput: byId("passwordInput"),
    loginMessage: byId("loginMessage"),
    logoutBtn: byId("logoutBtn"),
    navItems: document.querySelectorAll(".nav-item"),
    contentSections: document.querySelectorAll(".content-section"),
    pageTitle: byId("pageTitle"),
    pageSubtitle: byId("pageSubtitle"),
    sidebarRoleText: byId("sidebarRoleText"),
    sidebarUserName: byId("sidebarUserName"),
    sidebarUserRole: byId("sidebarUserRole"),
    sidebarAvatar: byId("sidebarAvatar"),
    topbarUserName: byId("topbarUserName"),
    topbarUserRole: byId("topbarUserRole"),
    topbarAvatar: byId("topbarAvatar"),
    sidebar: byId("sidebar"),
    sidebarOpenBtn: byId("sidebarOpenBtn"),
    sidebarCloseBtn: byId("sidebarCloseBtn"),
    themeToggleBtn: byId("themeToggleBtn"),
    darkModeSwitch: byId("darkModeSwitch"),
    recentActivityList: byId("recentActivityList"),
    totalStudentsCard: byId("totalStudentsCard"),
    totalTeachersCard: byId("totalTeachersCard"),
    totalClassesCard: byId("totalClassesCard"),
    attendanceTodayCard: byId("attendanceTodayCard"),
    addUserBtn: byId("addUserBtn"),
    userSearchInput: byId("userSearchInput"),
    userRoleFilter: byId("userRoleFilter"),
    userTableBody: byId("userTableBody"),
    classForm: byId("classForm"),
    classNameInput: byId("classNameInput"),
    hasSectionsInput: byId("hasSectionsInput"),
    sectionsGroup: byId("sectionsGroup"),
    sectionsInput: byId("sectionsInput"),
    classTableBody: byId("classTableBody"),
    teacherSelect: byId("teacherSelect"),
    teacherTimeForm: byId("teacherTimeForm"),
    timeLogDate: byId("timeLogDate"),
    entryTime: byId("entryTime"),
    exitTime: byId("exitTime"),
    teacherTimeTableBody: byId("teacherTimeTableBody"),
    attendanceClassSelect: byId("attendanceClassSelect"),
    attendanceSectionSelect: byId("attendanceSectionSelect"),
    attendanceDate: byId("attendanceDate"),
    loadAttendanceBtn: byId("loadAttendanceBtn"),
    saveAttendanceBtn: byId("saveAttendanceBtn"),
    attendanceTableBody: byId("attendanceTableBody"),
    subjectForm: byId("subjectForm"),
    subjectClassSelect: byId("subjectClassSelect"),
    subjectSectionSelect: byId("subjectSectionSelect"),
    subjectNamesInput: byId("subjectNamesInput"),
    subjectTableBody: byId("subjectTableBody"),
    marksExamSelect: byId("marksExamSelect"),
    marksClassSelect: byId("marksClassSelect"),
    marksSectionSelect: byId("marksSectionSelect"),
    marksSubjectSelect: byId("marksSubjectSelect"),
    loadMarksBtn: byId("loadMarksBtn"),
    saveMarksBtn: byId("saveMarksBtn"),
    marksTableBody: byId("marksTableBody"),
    marksheetStudentSelect: byId("marksheetStudentSelect"),
    marksheetYearSelect: byId("marksheetYearSelect"),
    downloadMarksheetBtn: byId("downloadMarksheetBtn"),
    certificateStudentSelect: byId("certificateStudentSelect"),
    certificateTypeSelect: byId("certificateTypeSelect"),
    downloadCertificateBtn: byId("downloadCertificateBtn"),
    topStudentAverage: byId("topStudentAverage"),
    lowAttendanceCount: byId("lowAttendanceCount"),
    teacherPunctualityRate: byId("teacherPunctualityRate"),
    examCompletionRate: byId("examCompletionRate"),
    studentPerformanceTableBody: byId("studentPerformanceTableBody"),
    teacherPerformanceTableBody: byId("teacherPerformanceTableBody"),
    studentProfileDetails: byId("studentProfileDetails"),
    studentAcademicSummary: byId("studentAcademicSummary"),
    profileSettingsForm: byId("profileSettingsForm"),
    profileNameInput: byId("profileNameInput"),
    profileEmailInput: byId("profileEmailInput"),
    quickActionBtns: document.querySelectorAll(".quick-action-btn"),
    commonModal: byId("commonModal"),
    modalTitle: byId("modalTitle"),
    modalBody: byId("modalBody"),
    modalCloseBtn: byId("modalCloseBtn")
  };

  init();

  function init() {
    bindEvents();
    seedDates();
    populateStaticSelects();
    renderAllTables();
    renderOverview();
    handleSectionInputVisibility();
    applyTheme("light");
  }

  function bindEvents() {
    el.loginForm?.addEventListener("submit", handleLogin);
    el.logoutBtn?.addEventListener("click", handleLogout);
    el.sidebarOpenBtn?.addEventListener("click", () => el.sidebar.classList.add("is-open"));
    el.sidebarCloseBtn?.addEventListener("click", () => el.sidebar.classList.remove("is-open"));
    el.themeToggleBtn?.addEventListener("click", toggleTheme);
    el.darkModeSwitch?.addEventListener("change", (e) => applyTheme(e.target.checked ? "dark" : "light"));
    el.classForm?.addEventListener("submit", saveClass);
    el.hasSectionsInput?.addEventListener("change", handleSectionInputVisibility);
    el.teacherTimeForm?.addEventListener("submit", saveTeacherTimeLog);
    el.loadAttendanceBtn?.addEventListener("click", loadAttendanceRegister);
    el.saveAttendanceBtn?.addEventListener("click", saveAttendanceRegister);
    el.subjectForm?.addEventListener("submit", saveSubjects);
    el.loadMarksBtn?.addEventListener("click", loadMarksRegister);
    el.saveMarksBtn?.addEventListener("click", saveMarksRegister);
    el.downloadMarksheetBtn?.addEventListener("click", downloadMarksheetPDF);
    el.downloadCertificateBtn?.addEventListener("click", downloadCertificatePDF);
    el.userSearchInput?.addEventListener("input", renderUserTable);
    el.userRoleFilter?.addEventListener("change", renderUserTable);
    el.profileSettingsForm?.addEventListener("submit", saveProfileSettings);
    el.modalCloseBtn?.addEventListener("click", closeModal);

    el.navItems.forEach((btn) => {
      btn.addEventListener("click", () => {
        const sectionId = btn.dataset.section;
        switchSection(sectionId, btn.textContent.trim());
      });
    });

    el.quickActionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const sectionId = btn.dataset.sectionTarget;
        const navBtn = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
        const label = navBtn ? navBtn.textContent.trim() : "Section";
        switchSection(sectionId, label);
      });
    });

    el.attendanceClassSelect?.addEventListener("change", () => {
      populateSectionSelect(el.attendanceClassSelect.value, el.attendanceSectionSelect, true);
    });

    el.subjectClassSelect?.addEventListener("change", () => {
      populateSectionSelect(el.subjectClassSelect.value, el.subjectSectionSelect, true);
    });

    el.marksClassSelect?.addEventListener("change", () => {
      populateSectionSelect(el.marksClassSelect.value, el.marksSectionSelect, true);
      populateMarksSubjectOptions();
    });

    el.marksSectionSelect?.addEventListener("change", populateMarksSubjectOptions);

    el.commonModal?.addEventListener("click", (e) => {
      if (e.target === el.commonModal) closeModal();
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    const role = el.roleSelect.value.trim();
    const email = el.emailInput.value.trim().toLowerCase();
    const password = el.passwordInput.value.trim();

    const user = state.users.find(
      (u) =>
        u.role === role &&
        u.email.toLowerCase() === email &&
        u.password === password &&
        u.active
    );

    if (!user) {
      el.loginMessage.textContent = "Invalid role, email, or password.";
      return;
    }

    state.currentUser = user;
    el.loginMessage.textContent = "";
    el.loginScreen.classList.add("hidden");
    el.appShell.classList.remove("hidden");

    applyRoleVisibility(user.role);
    updateUserUI();
    populateDynamicSelects();
    renderAllTables();
    renderOverview();
    renderAnalytics();
    renderStudentProfile();
    switchSection("overviewSection", "Dashboard Overview");
  }

  function handleLogout() {
    state.currentUser = null;
    el.appShell.classList.add("hidden");
    el.loginScreen.classList.remove("hidden");
    el.loginForm.reset();
    el.sidebar.classList.remove("is-open");
    el.loginMessage.textContent = "";
  }

  function applyRoleVisibility(role) {
    const adminEls = document.querySelectorAll(".admin-only");
    const teacherEls = document.querySelectorAll(".teacher-only");
    const studentEls = document.querySelectorAll(".student-only");

    adminEls.forEach((node) => {
      node.style.display = role === "admin" ? "" : "none";
    });

    teacherEls.forEach((node) => {
      if (node.classList.contains("admin-only")) {
        node.style.display = role === "admin" || role === "teacher" ? "" : "none";
      } else {
        node.style.display = role === "teacher" ? "" : "none";
      }
    });

    studentEls.forEach((node) => {
      if (node.classList.contains("admin-only") || node.classList.contains("teacher-only")) {
        node.style.display = role === "admin" || role === "teacher" || role === "student" ? "" : "none";
      } else {
        node.style.display = role === "student" ? "" : "none";
      }
    });
  }

  function updateUserUI() {
    if (!state.currentUser) return;

    const name = state.currentUser.name;
    const roleLabel = capitalize(state.currentUser.role);
    const avatarLetter = name.charAt(0).toUpperCase();

    el.sidebarUserName.textContent = name;
    el.sidebarUserRole.textContent = roleLabel;
    el.sidebarAvatar.textContent = avatarLetter;
    el.topbarUserName.textContent = name;
    el.topbarUserRole.textContent = roleLabel;
    el.topbarAvatar.textContent = avatarLetter;
    el.sidebarRoleText.textContent = `${roleLabel} Panel`;

    el.profileNameInput.value = name;
    el.profileEmailInput.value = state.currentUser.email;
  }

  function switchSection(sectionId, title) {
    state.selectedSectionId = sectionId;

    el.contentSections.forEach((section) => {
      section.classList.toggle("active-section", section.id === sectionId);
    });

    el.navItems.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.section === sectionId);
    });

    el.pageTitle.textContent = title;
    el.pageSubtitle.textContent = getSectionSubtitle(sectionId);
    el.sidebar.classList.remove("is-open");

    if (sectionId === "analyticsSection") renderAnalytics();
    if (sectionId === "studentProfileSection") renderStudentProfile();
    if (sectionId === "overviewSection") renderOverview();
  }

  function getSectionSubtitle(sectionId) {
    const map = {
      overviewSection: "Welcome to the school ERP system.",
      userManagementSection: "Manage all user accounts and access.",
      classManagementSection: "Edit classes and section structure.",
      teacherTimeSection: "Track teacher entry and exit records.",
      studentAttendanceSection: "Mark daily attendance by class.",
      subjectManagementSection: "Assign and manage subjects class-wise.",
      marksEntrySection: "Update and store exam marks.",
      reportsSection: "Generate marksheet and certificate PDFs.",
      analyticsSection: "Review academic and teacher performance.",
      studentProfileSection: "View student information and summary.",
      settingsSection: "Manage account and theme settings."
    };
    return map[sectionId] || "School ERP section.";
  }

  function seedDates() {
    const today = new Date().toISOString().split("T")[0];
    if (el.timeLogDate) el.timeLogDate.value = today;
    if (el.attendanceDate) el.attendanceDate.value = today;
  }

  function populateStaticSelects() {
    populateClassSelect(el.attendanceClassSelect);
    populateClassSelect(el.subjectClassSelect);
    populateClassSelect(el.marksClassSelect);
  }

  function populateDynamicSelects() {
    populateTeacherSelect();
    populateClassSelect(el.attendanceClassSelect);
    populateClassSelect(el.subjectClassSelect);
    populateClassSelect(el.marksClassSelect);
    populateStudentSelects();
    populateMarksSubjectOptions();
  }

  function populateTeacherSelect() {
    if (!el.teacherSelect) return;
    const teachers = state.users.filter((u) => u.role === "teacher");
    el.teacherSelect.innerHTML = `<option value="">Select teacher</option>`;
    teachers.forEach((teacher) => {
      el.teacherSelect.innerHTML += `<option value="${teacher.id}">${teacher.name}</option>`;
    });
  }

  function populateStudentSelects() {
    const students = state.students;
    [el.marksheetStudentSelect, el.certificateStudentSelect].forEach((select) => {
      if (!select) return;
      select.innerHTML = `<option value="">Select student</option>`;
      students.forEach((student) => {
        select.innerHTML += `<option value="${student.studentId}">${student.name} - Class ${student.className}${student.section ? " " + student.section : ""}</option>`;
      });
    });
  }

  function populateClassSelect(selectEl) {
    if (!selectEl) return;
    const selected = selectEl.value;
    selectEl.innerHTML = `<option value="">Select class</option>`;
    state.classes.forEach((cls) => {
      selectEl.innerHTML += `<option value="${cls.className}">Class ${cls.className}</option>`;
    });
    if ([...selectEl.options].some((o) => o.value === selected)) {
      selectEl.value = selected;
    }
  }

  function populateSectionSelect(className, selectEl, allowEmptyLabel = false) {
    if (!selectEl) return;
    selectEl.innerHTML = `<option value="">${allowEmptyLabel ? "No Section / Select Section" : "Select section"}</option>`;

    const cls = state.classes.find((item) => item.className === className);
    if (!cls || !cls.hasSections) return;

    cls.sections.forEach((section) => {
      selectEl.innerHTML += `<option value="${section}">${section}</option>`;
    });
  }

  function populateMarksSubjectOptions() {
    if (!el.marksSubjectSelect) return;

    const className = el.marksClassSelect.value;
    const section = el.marksSectionSelect.value;
    const subjectGroup = state.subjects.find((s) => s.className === className && (s.section || "") === (section || ""));

    el.marksSubjectSelect.innerHTML = `<option value="">Select subject</option>`;

    if (!subjectGroup) return;
    subjectGroup.names.forEach((name) => {
      el.marksSubjectSelect.innerHTML += `<option value="${name}">${name}</option>`;
    });
  }

  function handleSectionInputVisibility() {
    if (!el.sectionsGroup || !el.hasSectionsInput) return;
    el.sectionsGroup.style.display = el.hasSectionsInput.value === "yes" ? "grid" : "none";
  }

  function saveClass(e) {
    e.preventDefault();

    const className = el.classNameInput.value.trim();
    const hasSections = el.hasSectionsInput.value === "yes";
    const sections = hasSections
      ? el.sectionsInput.value.split(",").map((s) => s.trim()).filter(Boolean)
      : [];

    if (!className) {
      alert("Please select a class.");
      return;
    }

    const existingIndex = state.classes.findIndex((c) => c.className === className);
    const payload = {
      id: existingIndex >= 0 ? state.classes[existingIndex].id : Date.now(),
      className,
      hasSections,
      sections
    };

    if (existingIndex >= 0) {
      state.classes[existingIndex] = payload;
    } else {
      state.classes.push(payload);
    }

    state.activities.unshift({
      id: Date.now(),
      text: `Class ${className} structure updated.`,
      time: "Just now"
    });

    el.classForm.reset();
    el.hasSectionsInput.value = "yes";
    handleSectionInputVisibility();
    populateDynamicSelects();
    renderClassTable();
    renderOverview();
    showModal("Success", `<p>Class ${className} saved successfully.</p>`);
  }

  function renderClassTable() {
    if (!el.classTableBody) return;

    if (!state.classes.length) {
      el.classTableBody.innerHTML = `<tr><td colspan="4" class="empty-cell">No classes added yet.</td></tr>`;
      return;
    }

    el.classTableBody.innerHTML = state.classes.map((cls) => `
      <tr>
        <td>Class ${cls.className}</td>
        <td>${cls.hasSections ? "Yes" : "No"}</td>
        <td>${cls.hasSections ? cls.sections.join(", ") : "None"}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="window.schoolERP.editClass('${cls.className}')">Edit</button>
        </td>
      </tr>
    `).join("");
  }

  function editClass(className) {
    const cls = state.classes.find((item) => item.className === className);
    if (!cls) return;
    el.classNameInput.value = cls.className;
    el.hasSectionsInput.value = cls.hasSections ? "yes" : "no";
    el.sectionsInput.value = cls.sections.join(", ");
    handleSectionInputVisibility();
    switchSection("classManagementSection", "Class & Section Management");
  }

  function saveTeacherTimeLog(e) {
    e.preventDefault();

    const teacherId = Number(el.teacherSelect.value);
    const date = el.timeLogDate.value;
    const entryTime = el.entryTime.value;
    const exitTime = el.exitTime.value;

    if (!teacherId || !date || !entryTime || !exitTime) {
      alert("Please fill all teacher time fields.");
      return;
    }

    state.timeLogs.push({
      id: Date.now(),
      teacherId,
      date,
      entryTime,
      exitTime
    });

    const teacher = state.users.find((u) => u.id === teacherId);
    state.activities.unshift({
      id: Date.now() + 1,
      text: `${teacher?.name || "Teacher"} time log saved.`,
      time: "Just now"
    });

    el.teacherTimeForm.reset();
    seedDates();
    renderTeacherTimeTable();
    renderOverview();
    renderAnalytics();
  }

  function renderTeacherTimeTable() {
    if (!el.teacherTimeTableBody) return;

    if (!state.timeLogs.length) {
      el.teacherTimeTableBody.innerHTML = `<tr><td colspan="5" class="empty-cell">No time logs available.</td></tr>`;
      return;
    }

    el.teacherTimeTableBody.innerHTML = state.timeLogs.map((log) => {
      const teacher = state.users.find((u) => u.id === log.teacherId);
      const status = log.entryTime <= "09:15" ? "On Time" : "Late";
      return `
        <tr>
          <td>${teacher ? teacher.name : "Unknown"}</td>
          <td>${log.date}</td>
          <td>${log.entryTime}</td>
          <td>${log.exitTime}</td>
          <td>${status}</td>
        </tr>
      `;
    }).join("");
  }

  function loadAttendanceRegister() {
    const className = el.attendanceClassSelect.value;
    const section = el.attendanceSectionSelect.value;
    const date = el.attendanceDate.value;

    if (!className || !date) {
      alert("Please select class and date.");
      return;
    }

    const cls = state.classes.find((c) => c.className === className);
    if (cls?.hasSections && !section) {
      alert("Please select a section.");
      return;
    }

    const students = getStudentsByClassAndSection(className, section);
    if (!students.length) {
      el.attendanceTableBody.innerHTML = `<tr><td colspan="5" class="empty-cell">No students found for this class.</td></tr>`;
      return;
    }

    el.attendanceTableBody.innerHTML = students.map((student) => {
      const existing = state.attendance.find(
        (a) => a.studentId === student.studentId && a.date === date && a.className === className && (a.section || "") === (section || "")
      );

      return `
        <tr>
          <td>${student.rollNo}</td>
          <td>${student.name}</td>
          <td>Class ${student.className}</td>
          <td>${student.section || "None"}</td>
          <td>
            <select class="attendance-status" data-student-id="${student.studentId}">
              <option value="Present" ${existing?.status === "Present" ? "selected" : ""}>Present</option>
              <option value="Absent" ${existing?.status === "Absent" ? "selected" : ""}>Absent</option>
              <option value="Late" ${existing?.status === "Late" ? "selected" : ""}>Late</option>
            </select>
          </td>
        </tr>
      `;
    }).join("");
  }

  function saveAttendanceRegister() {
    const className = el.attendanceClassSelect.value;
    const section = el.attendanceSectionSelect.value;
    const date = el.attendanceDate.value;
    const rows = document.querySelectorAll(".attendance-status");

    if (!rows.length) {
      alert("Please load students first.");
      return;
    }

    rows.forEach((row) => {
      const studentId = Number(row.dataset.studentId);
      const status = row.value;

      const existingIndex = state.attendance.findIndex(
        (a) => a.studentId === studentId && a.date === date && a.className === className && (a.section || "") === (section || "")
      );

      const payload = {
        id: existingIndex >= 0 ? state.attendance[existingIndex].id : Date.now() + studentId,
        className,
        section,
        date,
        studentId,
        status
      };

      if (existingIndex >= 0) {
        state.attendance[existingIndex] = payload;
      } else {
        state.attendance.push(payload);
      }
    });

    state.activities.unshift({
      id: Date.now(),
      text: `Attendance saved for Class ${className}${section ? " " + section : ""}.`,
      time: "Just now"
    });

    renderOverview();
    renderAnalytics();
    showModal("Attendance Saved", `<p>Attendance has been saved successfully.</p>`);
  }

  function saveSubjects(e) {
    e.preventDefault();

    const className = el.subjectClassSelect.value;
    const section = el.subjectSectionSelect.value;
    const names = el.subjectNamesInput.value.split(",").map((s) => s.trim()).filter(Boolean);

    if (!className || !names.length) {
      alert("Please select class and enter subject names.");
      return;
    }

    const cls = state.classes.find((c) => c.className === className);
    if (cls?.hasSections && !section) {
      alert("Please select a section.");
      return;
    }

    const existingIndex = state.subjects.findIndex((s) => s.className === className && (s.section || "") === (section || ""));
    const payload = {
      id: existingIndex >= 0 ? state.subjects[existingIndex].id : Date.now(),
      className,
      section,
      names
    };

    if (existingIndex >= 0) {
      state.subjects[existingIndex] = payload;
    } else {
      state.subjects.push(payload);
    }

    state.activities.unshift({
      id: Date.now() + 2,
      text: `Subjects updated for Class ${className}${section ? " " + section : ""}.`,
      time: "Just now"
    });

    el.subjectForm.reset();
    renderSubjectTable();
    populateMarksSubjectOptions();
    renderOverview();
  }

  function renderSubjectTable() {
    if (!el.subjectTableBody) return;

    if (!state.subjects.length) {
      el.subjectTableBody.innerHTML = `<tr><td colspan="5" class="empty-cell">No subjects assigned yet.</td></tr>`;
      return;
    }

    el.subjectTableBody.innerHTML = state.subjects.map((item) => `
      <tr>
        <td>Class ${item.className}</td>
        <td>${item.section || "None"}</td>
        <td>${item.names.join(", ")}</td>
        <td>${item.names.length}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="window.schoolERP.editSubjects('${item.className}','${item.section || ""}')">Edit</button>
        </td>
      </tr>
    `).join("");
  }

  function editSubjects(className, section) {
    const subject = state.subjects.find((s) => s.className === className && (s.section || "") === (section || ""));
    if (!subject) return;
    el.subjectClassSelect.value = subject.className;
    populateSectionSelect(subject.className, el.subjectSectionSelect, true);
    el.subjectSectionSelect.value = subject.section || "";
    el.subjectNamesInput.value = subject.names.join(", ");
    switchSection("subjectManagementSection", "Subject Management");
  }

  function loadMarksRegister() {
    const examId = el.marksExamSelect.value;
    const className = el.marksClassSelect.value;
    const section = el.marksSectionSelect.value;
    const subject = el.marksSubjectSelect.value;

    if (!examId || !className || !subject) {
      alert("Please select exam, class, and subject.");
      return;
    }

    const cls = state.classes.find((c) => c.className === className);
    if (cls?.hasSections && !section) {
      alert("Please select a section.");
      return;
    }

    const students = getStudentsByClassAndSection(className, section);
    if (!students.length) {
      el.marksTableBody.innerHTML = `<tr><td colspan="5" class="empty-cell">No students found.</td></tr>`;
      return;
    }

    el.marksTableBody.innerHTML = students.map((student) => {
      const existing = state.marks.find(
        (m) => m.examId === examId && m.studentId === student.studentId && m.subject === subject
      );

      return `
        <tr>
          <td>${student.rollNo}</td>
          <td>${student.name}</td>
          <td>${subject}</td>
          <td><input type="number" class="full-marks-input" data-student-id="${student.studentId}" value="${existing?.fullMarks || 100}" min="1" max="1000" /></td>
          <td><input type="number" class="obtained-marks-input" data-student-id="${student.studentId}" value="${existing?.obtainedMarks || ""}" min="0" max="1000" /></td>
        </tr>
      `;
    }).join("");
  }

  function saveMarksRegister() {
    const examId = el.marksExamSelect.value;
    const className = el.marksClassSelect.value;
    const section = el.marksSectionSelect.value;
    const subject = el.marksSubjectSelect.value;
    const fullMarksInputs = document.querySelectorAll(".full-marks-input");
    const obtainedMarksInputs = document.querySelectorAll(".obtained-marks-input");

    if (!fullMarksInputs.length || !obtainedMarksInputs.length) {
      alert("Please load students first.");
      return;
    }

    obtainedMarksInputs.forEach((input, index) => {
      const studentId = Number(input.dataset.studentId);
      const obtainedMarks = Number(input.value || 0);
      const fullMarks = Number(fullMarksInputs[index].value || 100);

      const existingIndex = state.marks.findIndex(
        (m) => m.examId === examId && m.studentId === studentId && m.subject === subject
      );

      const payload = {
        id: existingIndex >= 0 ? state.marks[existingIndex].id : Date.now() + studentId + index,
        examId,
        studentId,
        className,
        section,
        subject,
        fullMarks,
        obtainedMarks
      };

      if (existingIndex >= 0) {
        state.marks[existingIndex] = payload;
      } else {
        state.marks.push(payload);
      }
    });

    state.activities.unshift({
      id: Date.now() + 3,
      text: `${subject} marks saved for Class ${className}${section ? " " + section : ""}.`,
      time: "Just now"
    });

    renderOverview();
    renderAnalytics();
    renderStudentProfile();
    showModal("Marks Saved", `<p>Exam marks have been saved successfully.</p>`);
  }

  function renderUserTable() {
    if (!el.userTableBody) return;

    const query = (el.userSearchInput?.value || "").trim().toLowerCase();
    const roleFilter = el.userRoleFilter?.value || "all";

    const filtered = state.users.filter((user) => {
      const matchesQuery =
        user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query);
      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      return matchesQuery && matchesRole;
    });

    if (!filtered.length) {
      el.userTableBody.innerHTML = `<tr><td colspan="5" class="empty-cell">No users found.</td></tr>`;
      return;
    }

    el.userTableBody.innerHTML = filtered.map((user) => `
      <tr>
        <td>${user.name}</td>
        <td>${capitalize(user.role)}</td>
        <td>${user.email}</td>
        <td>${user.active ? "Active" : "Inactive"}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="window.schoolERP.toggleUserStatus(${user.id})">
            ${user.active ? "Disable" : "Enable"}
          </button>
        </td>
      </tr>
    `).join("");
  }

  function toggleUserStatus(userId) {
    const user = state.users.find((u) => u.id === userId);
    if (!user) return;
    user.active = !user.active;
    renderUserTable();
  }

  function renderOverview() {
    el.totalStudentsCard.textContent = state.students.length;
    el.totalTeachersCard.textContent = state.users.filter((u) => u.role === "teacher").length;
    el.totalClassesCard.textContent = state.classes.length;
    el.attendanceTodayCard.textContent = `${calculateTodayAttendance()}%`;
    renderRecentActivities();
  }

  function renderRecentActivities() {
    if (!el.recentActivityList) return;

    const items = state.activities.slice(0, 5);
    if (!items.length) {
      el.recentActivityList.innerHTML = `<div class="empty-note">Recent activity will appear here.</div>`;
      return;
    }

    el.recentActivityList.innerHTML = items.map((item) => `
      <div class="detail-row">
        <span>${item.text}</span>
        <strong>${item.time}</strong>
      </div>
    `).join("");
  }

  function calculateTodayAttendance() {
    const today = el.attendanceDate?.value || new Date().toISOString().split("T")[0];
    const todayRecords = state.attendance.filter((a) => a.date === today);
    if (!todayRecords.length) return 0;
    const presentCount = todayRecords.filter((a) => a.status === "Present" || a.status === "Late").length;
    return Math.round((presentCount / todayRecords.length) * 100);
  }

  function renderAnalytics() {
    const studentRows = state.students.map((student) => {
      const attendancePercent = getStudentAttendancePercent(student.studentId);
      const averageMarks = getStudentAverage(student.studentId);
      return {
        ...student,
        attendancePercent,
        averageMarks,
        status: averageMarks >= 75 ? "Excellent" : averageMarks >= 50 ? "Average" : "Needs Support"
      };
    });

    const teacherRows = state.users
      .filter((u) => u.role === "teacher")
      .map((teacher) => {
        const punctuality = getTeacherPunctuality(teacher.id);
        const marksUpdated = state.marks.filter((m) => {
          const assigned = state.teachers.find((t) => t.userId === teacher.id);
          return assigned ? assigned.assignedClasses.some((cls) => m.className === cls.split("-")[0]) : false;
        }).length;

        return {
          ...teacher,
          assignedClasses: (state.teachers.find((t) => t.userId === teacher.id)?.assignedClasses || []).join(", "),
          punctuality,
          marksUpdated,
          status: punctuality >= 80 ? "Good" : "Review"
        };
      });

    const topAverage = studentRows.length ? Math.max(...studentRows.map((s) => s.averageMarks)) : 0;
    const lowAttendance = studentRows.filter((s) => s.attendancePercent < 75).length;
    const teacherPunctuality = teacherRows.length
      ? Math.round(teacherRows.reduce((sum, t) => sum + t.punctuality, 0) / teacherRows.length)
      : 0;
    const examCompletion = calculateExamCompletion();

    el.topStudentAverage.textContent = `${topAverage}%`;
    el.lowAttendanceCount.textContent = lowAttendance;
    el.teacherPunctualityRate.textContent = `${teacherPunctuality}%`;
    el.examCompletionRate.textContent = `${examCompletion}%`;

    el.studentPerformanceTableBody.innerHTML = studentRows.length
      ? studentRows.map((row) => `
        <tr>
          <td>${row.name}</td>
          <td>Class ${row.className}${row.section ? " " + row.section : ""}</td>
          <td>${row.attendancePercent}%</td>
          <td>${row.averageMarks}%</td>
          <td>${row.status}</td>
        </tr>
      `).join("")
      : `<tr><td colspan="5" class="empty-cell">No analytics data available yet.</td></tr>`;

    el.teacherPerformanceTableBody.innerHTML = teacherRows.length
      ? teacherRows.map((row) => `
        <tr>
          <td>${row.name}</td>
          <td>${row.assignedClasses || "Not Assigned"}</td>
          <td>${row.punctuality}%</td>
          <td>${row.marksUpdated}</td>
          <td>${row.status}</td>
        </tr>
      `).join("")
      : `<tr><td colspan="5" class="empty-cell">No teacher performance data available yet.</td></tr>`;
  }

  function renderStudentProfile() {
    if (!state.currentUser || state.currentUser.role !== "student") return;

    const student = state.students.find((s) => s.userId === state.currentUser.id);
    if (!student) return;

    el.studentProfileDetails.innerHTML = `
      <div class="detail-row"><span>Name</span><strong>${student.name}</strong></div>
      <div class="detail-row"><span>Roll Number</span><strong>${student.rollNo}</strong></div>
      <div class="detail-row"><span>Class</span><strong>${student.className}</strong></div>
      <div class="detail-row"><span>Section</span><strong>${student.section || "None"}</strong></div>
    `;

    el.studentAcademicSummary.innerHTML = `
      <div class="detail-row"><span>Attendance</span><strong>${getStudentAttendancePercent(student.studentId)}%</strong></div>
      <div class="detail-row"><span>Average Marks</span><strong>${getStudentAverage(student.studentId)}%</strong></div>
      <div class="detail-row"><span>Rank</span><strong>${getStudentRank(student.studentId)}</strong></div>
      <div class="detail-row"><span>Status</span><strong>${getStudentAverage(student.studentId) >= 50 ? "Pass" : "Needs Support"}</strong></div>
    `;
  }

  function saveProfileSettings(e) {
    e.preventDefault();
    if (!state.currentUser) return;
    state.currentUser.name = el.profileNameInput.value.trim() || state.currentUser.name;
    state.currentUser.email = el.profileEmailInput.value.trim() || state.currentUser.email;
    updateUserUI();
    renderUserTable();
    showModal("Profile Updated", `<p>Profile settings saved successfully.</p>`);
  }

  function renderAllTables() {
    renderUserTable();
    renderClassTable();
    renderTeacherTimeTable();
    renderSubjectTable();
    renderAnalytics();
  }

  function getStudentsByClassAndSection(className, section) {
    return state.students.filter((student) => {
      if (student.className !== className) return false;
      return (student.section || "") === (section || "");
    });
  }

  function getStudentAttendancePercent(studentId) {
    const records = state.attendance.filter((a) => a.studentId === studentId);
    if (!records.length) return 0;
    const present = records.filter((a) => a.status === "Present" || a.status === "Late").length;
    return Math.round((present / records.length) * 100);
  }

  function getStudentAverage(studentId) {
    const studentMarks = state.marks.filter((m) => m.studentId === studentId && m.examId === "annual");
    if (!studentMarks.length) return 0;
    const totalObtained = studentMarks.reduce((sum, item) => sum + Number(item.obtainedMarks || 0), 0);
    const totalFull = studentMarks.reduce((sum, item) => sum + Number(item.fullMarks || 0), 0);
    if (!totalFull) return 0;
    return Math.round((totalObtained / totalFull) * 100);
  }

  function getStudentRank(studentId) {
    const ranked = state.students
      .map((student) => ({
        studentId: student.studentId,
        average: getStudentAverage(student.studentId)
      }))
      .sort((a, b) => b.average - a.average);

    const index = ranked.findIndex((item) => item.studentId === studentId);
    return index >= 0 ? index + 1 : "-";
  }

  function getTeacherPunctuality(teacherId) {
    const logs = state.timeLogs.filter((log) => log.teacherId === teacherId);
    if (!logs.length) return 0;
    const onTime = logs.filter((log) => log.entryTime <= "09:15").length;
    return Math.round((onTime / logs.length) * 100);
  }

  function calculateExamCompletion() {
    const annualStudents = state.students.length;
    const annualSubjects = state.subjects.reduce((sum, subjectSet) => sum + subjectSet.names.length, 0);
    const denominator = annualStudents * (annualSubjects ? Math.max(1, Math.round(annualSubjects / Math.max(1, state.subjects.length))) : 1);
    if (!denominator) return 0;
    const annualMarks = state.marks.filter((m) => m.examId === "annual").length;
    return Math.min(100, Math.round((annualMarks / denominator) * 100));
  }

  function downloadMarksheetPDF() {
    const studentId = Number(el.marksheetStudentSelect.value);
    const year = el.marksheetYearSelect.value;

    if (!studentId || !year) {
      alert("Please select student and academic year.");
      return;
    }

    const student = state.students.find((s) => s.studentId === studentId);
    if (!student) return;

    const marks = state.marks.filter((m) => m.studentId === studentId && m.examId === "annual");
    if (!marks.length) {
      alert("No annual marks found for this student.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Annual Marksheet", 14, 18);

    doc.setFontSize(11);
    doc.text(`Student Name: ${student.name}`, 14, 30);
    doc.text(`Class: ${student.className}`, 14, 37);
    doc.text(`Section: ${student.section || "None"}`, 14, 44);
    doc.text(`Roll No: ${student.rollNo}`, 14, 51);
    doc.text(`Academic Year: ${year}`, 14, 58);

    let y = 72;
    doc.text("Subject", 14, y);
    doc.text("Full Marks", 90, y);
    doc.text("Obtained", 140, y);
    y += 6;

    marks.forEach((mark) => {
      doc.text(String(mark.subject), 14, y);
      doc.text(String(mark.fullMarks), 95, y);
      doc.text(String(mark.obtainedMarks), 145, y);
      y += 8;
    });

    const totalFull = marks.reduce((sum, m) => sum + Number(m.fullMarks), 0);
    const totalObtained = marks.reduce((sum, m) => sum + Number(m.obtainedMarks), 0);
    const percentage = Math.round((totalObtained / totalFull) * 100);

    y += 8;
    doc.text(`Total: ${totalObtained} / ${totalFull}`, 14, y);
    y += 8;
    doc.text(`Percentage: ${percentage}%`, 14, y);
    y += 8;
    doc.text(`Result: ${percentage >= 50 ? "Pass" : "Needs Support"}`, 14, y);

    doc.save(`${student.name.replace(/\s+/g, "_")}_marksheet.pdf`);

    state.activities.unshift({
      id: Date.now(),
      text: `${student.name} marksheet downloaded.`,
      time: "Just now"
    });

    renderRecentActivities();
  }

  function downloadCertificatePDF() {
    const studentId = Number(el.certificateStudentSelect.value);
    const certificateType = el.certificateTypeSelect.value;

    if (!studentId || !certificateType) {
      alert("Please select student and certificate type.");
      return;
    }

    const student = state.students.find((s) => s.studentId === studentId);
    if (!student) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("landscape");

    doc.setDrawColor(15, 118, 110);
    doc.setLineWidth(2);
    doc.rect(10, 10, 277, 190);

    doc.setFontSize(24);
    doc.text("School Certificate", 105, 40);

    doc.setFontSize(14);
    doc.text("This is to certify that", 120, 70);

    doc.setFontSize(22);
    doc.text(student.name, 120, 90);

    doc.setFontSize(14);
    doc.text(
      `of Class ${student.className}${student.section ? " Section " + student.section : ""} has been issued the ${formatCertificateType(certificateType)} certificate.`,
      35,
      115
    );

    doc.text(`Date: ${new Date().toLocaleDateString()}`, 35, 145);
    doc.text("Authorized Signature", 210, 165);

    doc.save(`${student.name.replace(/\s+/g, "_")}_certificate.pdf`);

    state.activities.unshift({
      id: Date.now() + 4,
      text: `${student.name} certificate downloaded.`,
      time: "Just now"
    });

    renderRecentActivities();
  }

  function formatCertificateType(type) {
    const map = {
      "annual-promotion": "Annual Promotion",
      "bonafide": "Bonafide",
      "achievement": "Achievement"
    };
    return map[type] || "General";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (el.darkModeSwitch) el.darkModeSwitch.checked = theme === "dark";
    if (el.themeToggleBtn) el.themeToggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(current === "light" ? "dark" : "light");
  }

  function showModal(title, content) {
    if (!el.commonModal) return;
    el.modalTitle.textContent = title;
    el.modalBody.innerHTML = content;
    el.commonModal.classList.remove("hidden");
    el.commonModal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    if (!el.commonModal) return;
    el.commonModal.classList.add("hidden");
    el.commonModal.setAttribute("aria-hidden", "true");
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function capitalize(text) {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
  }

  window.schoolERP = {
    editClass,
    editSubjects,
    toggleUserStatus
  };
});