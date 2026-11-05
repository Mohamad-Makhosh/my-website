/* SVU Events Guide — main.js */

"use strict";

/** Demo event data */
const EVENTS = [
  {
    id: 1,
    title: "يوم البرمجة المفتوحة — هاكاثون SVU",
    category: "تقني",
    date: "2026-10-30",
    time: "10:00 ص — 6:00 م",
    location: "قاعة المؤتمرات الافتراضية",
    city: "أونلاين",
    short: "مسابقة برمجة جماعية لطلاب تقنية المعلومات مع جوائز وموجهين من الصناعة.",
    description:
      "ينظّم قسم تقنية المعلومات هاكاثونًا لمدة يوم كامل يشارك فيه فرق من 3–5 طلاب. يتضمّن ورشًا قصيرة عن الذكاء الاصطناعي وتطوير الويب، ثم مشروع تطبيقي يُعرض أمام لجنة تحكيم. التسجيل مجاني لطلاب الجامعة الافتراضية السورية.",
    image: "assets/img/event-1.jpg",
    gallery: [
      "assets/img/event-1-g1.jpg",
      "assets/img/event-1-g2.jpg",
      "assets/img/event-1-g3.jpg",
    ],
    featured: true,
    today: true,
  },
  {
    id: 2,
    title: "أمسية شعرية: أصوات من الشام",
    category: "ثقافة",
    date: "2026-11-02",
    time: "7:00 م — 9:30 م",
    location: "المسرح الثقافي الافتراضي",
    city: "دمشق / أونلاين",
    short: "قراءات شعرية لطلاب وخريجين مع ضيف شرف من الساحة الأدبية السورية.",
    description:
      "أمسية ثقافية تجمع محبّي الأدب العربي في جلسة افتراضية تفاعلية. تتضمن قراءات أصلية، نقاشًا مفتوحًا حول الشعر المعاصر، وعرضًا قصيرًا لمجلة الجامعة الأدبية. المشاركة مفتوحة لجميع البرامج.",
    image: "assets/img/event-2.jpg",
    gallery: [
      "assets/img/event-2-g1.jpg",
      "assets/img/event-2-g2.jpg",
      "assets/img/event-2-g3.jpg",
    ],
    featured: true,
    today: false,
  },
  {
    id: 3,
    title: "دوري كرة القدم الخماسية — بطولة الأصدقاء",
    category: "رياضة",
    date: "2026-11-05",
    time: "4:00 م — 8:00 م",
    location: "ملعب الشراكة الرياضية — دمشق",
    city: "دمشق",
    short: "بطولة ودية بين فرق الطلاب مع تحكيم رسمي وجوائز للفائزين.",
    description:
      "بطولة رياضية سنوية تهدف لتعزيز التواصل الاجتماعي بين طلاب الجامعة. تُقام على أرض ملعب شراكة، ويُسمح بالتسجيل الفردي أو كفريق كامل. يوفّر المنظمون معدات أساسية وإسعافات أولية.",
    image: "assets/img/event-3.jpg",
    gallery: [
      "assets/img/event-3-g1.jpg",
      "assets/img/event-3-g2.jpg",
      "assets/img/event-3-g3.jpg",
    ],
    featured: true,
    today: false,
  },
  {
    id: 4,
    title: "حفل موسيقي أكاديمي — أوركسترا الطلاب",
    category: "موسيقى",
    date: "2026-11-08",
    time: "6:30 م — 9:00 م",
    location: "قاعة الاحتفالات الكبرى",
    city: "أونلاين + حلب",
    short: "عروض كلاسيكية ومعاصرة من فرقة طلاب كلية الفنون والمهتمين بالموسيقى.",
    description:
      "أمسية موسيقية تجمع بين المقطوعات الكلاسيكية والمقطوعات العربية المعاصرة. يشارك عازفون طلاب ومتطوعون، مع بث مباشر لطلاب المحافظات الأخرى عبر منصة الجامعة.",
    image: "assets/img/event-4.jpg",
    gallery: [
      "assets/img/event-4-g1.jpg",
      "assets/img/event-4-g2.jpg",
      "assets/img/event-4-g3.jpg",
    ],
    featured: false,
    today: false,
  },
  {
    id: 5,
    title: "ورشة البحث العلمي وكتابة الأوراق",
    category: "أكاديمي",
    date: "2026-11-12",
    time: "11:00 ص — 2:00 م",
    location: "منصة التعلم الإلكتروني SVU",
    city: "أونلاين",
    short: "دورة مكثفة حول منهجية البحث، الاستشهاد، وتقديم الأوراق العلمية.",
    description:
      "ورشة أكاديمية موجّهة لطلاب مشاريع التخرج والدراسات العليا. تغطي اختيار الموضوع، مراجعة الأدبيات، أدوات إدارة المراجع، وأخلاقيات النشر. يُمنح المشاركون شهادة حضور إلكترونية.",
    image: "assets/img/event-5.jpg",
    gallery: [
      "assets/img/event-5-g1.jpg",
      "assets/img/event-5-g2.jpg",
      "assets/img/event-5-g3.jpg",
    ],
    featured: true,
    today: false,
  },
  {
    id: 6,
    title: "يوم عائلي في الحرم الافتراضي",
    category: "عائلي",
    date: "2026-11-15",
    time: "12:00 ظ — 5:00 م",
    location: "حديقة الشراكة الطلابية",
    city: "دمشق",
    short: "فعاليات ترفيهية وتعليمية للطلاب وعائلاتهم مع ألعاب وورش للأطفال.",
    description:
      "يوم مفتوح يدعو عائلات الطلاب للمشاركة في ألعاب جماعية، ورش رسم للأطفال، وركن تصوير تذكاري، وموائد خفيفة. الهدف تعزيز الانتماء المجتمعي للجامعة الافتراضية.",
    image: "assets/img/event-6.jpg",
    gallery: [
      "assets/img/event-6-g1.jpg",
      "assets/img/event-6-g2.jpg",
      "assets/img/event-6-g3.jpg",
    ],
    featured: false,
    today: false,
  },
  {
    id: 7,
    title: "ملتقى الأمن السيبراني للطلاب",
    category: "تقني",
    date: "2026-11-18",
    time: "9:30 ص — 3:00 م",
    location: "قاعة الندوات الافتراضية",
    city: "أونلاين",
    short: "محاضرات وتطبيقات عملية حول حماية البيانات واختبار الاختراق الأخلاقي.",
    description:
      "ملتقى تقني يستضيف خبراء أمن معلومات لمناقشة أحدث التهديدات وطرق الحماية. يتضمن مختبرًا عمليًا مبسّطًا وجلسة أسئلة وأجوبة. مناسب لطلاب تقنية المعلومات والمهتمين.",
    image: "assets/img/event-7.jpg",
    gallery: [
      "assets/img/event-7-g1.jpg",
      "assets/img/event-7-g2.jpg",
      "assets/img/event-7-g3.jpg",
    ],
    featured: false,
    today: false,
  },
  {
    id: 8,
    title: "معرض الفنون الرقمية الطلابي",
    category: "ثقافة",
    date: "2026-11-22",
    time: "10:00 ص — 7:00 م",
    location: "معرض الجامعة الافتراضي",
    city: "أونلاين",
    short: "عرض أعمال تصميم جرافيك وتصوير رقمي ورسوم متحركة من إنتاج الطلاب.",
    description:
      "معرض رقمي تفاعلي يتيح للزوار تصفّح أعمال الطلاب والتصويت للعمل المفضّل. تُمنح جوائز تقديرية لأفضل ثلاثة أعمال، مع إمكانية نشر الأعمال المميزة على قنوات الجامعة.",
    image: "assets/img/event-8.jpg",
    gallery: [
      "assets/img/event-8-g1.jpg",
      "assets/img/event-8-g2.jpg",
      "assets/img/event-8-g3.jpg",
    ],
    featured: false,
    today: false,
  },
];

const CATEGORIES = ["الكل", "ثقافة", "رياضة", "موسيقى", "أكاديمي", "تقني", "عائلي"];

/* Helpers */
function formatDateAr(iso) {
  try {
    return new Date(iso + "T12:00:00").toLocaleDateString("ar-SY", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

function getEventById(id) {
  return EVENTS.find((e) => e.id === Number(id));
}

function createEventCard(event, opts = {}) {
  const { compact = false } = opts;
  const todayBadge = event.today
    ? '<span class="today-ribbon">اليوم</span>'
    : "";
  const desc = compact ? "" : `<p class="card-text">${event.short}</p>`;

  return `
    <div class="event-card">
      <div class="card-img-wrap">
        ${todayBadge}
        <span class="badge text-white badge-cat badge-${event.category}">${event.category}</span>
        <img src="${event.image}" alt="${event.title}" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="card-title">${event.title}</h3>
        <div class="event-meta">
          <span><i class="bi bi-calendar3"></i>${formatDateAr(event.date)}</span>
          <span><i class="bi bi-geo-alt"></i>${event.city}</span>
        </div>
        ${desc}
        <div class="card-actions">
          <a href="event.html?id=${event.id}" class="btn btn-svu btn-sm">التفاصيل</a>
          ${
            compact
              ? ""
              : `<button type="button" class="btn btn-svu-outline btn-sm" data-book="${event.id}">احجز مكانًا</button>`
          }
        </div>
      </div>
    </div>
  `;
}

/* Featured slider */
function initFeaturedSlider() {
  const track = document.getElementById("featuredTrack");
  if (!track) return;

  const featured = EVENTS.filter((e) => e.featured);
  track.innerHTML = featured
    .map((e) => `<div class="featured-slide">${createEventCard(e)}</div>`)
    .join("");

  const prev = document.querySelector(".slider-nav.prev");
  const next = document.querySelector(".slider-nav.next");
  const scrollAmount = 360;

  if (prev) prev.addEventListener("click", () => track.scrollBy({ left: scrollAmount, behavior: "smooth" }));
  if (next) next.addEventListener("click", () => track.scrollBy({ left: -scrollAmount, behavior: "smooth" }));

  // Auto-scroll
  let auto = setInterval(() => {
    if (track.scrollLeft <= 5) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    } else {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  }, 4500);

  track.addEventListener("mouseenter", () => clearInterval(auto));
  track.addEventListener("mouseleave", () => {
    auto = setInterval(() => {
      if (track.scrollLeft <= 5) {
        track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
      } else {
        track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }, 4500);
  });
}

/* Latest events */
function initLatestEvents() {
  const grid = document.getElementById("latestEvents");
  if (!grid) return;

  const latest = [...EVENTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6);
  grid.innerHTML = latest
    .map((e) => `<div class="col-md-6 col-lg-4 mb-4">${createEventCard(e)}</div>`)
    .join("");
}

/* Category badges */
function initCategoryBadges() {
  const wrap = document.getElementById("categoryBadges");
  if (!wrap) return;

  const saved = localStorage.getItem("svuPreferredCategory") || "الكل";

  wrap.innerHTML = CATEGORIES.map((cat) => {
    const active = cat === saved ? "active" : "";
    return `<button type="button" class="cat-badge ${active}" data-cat="${cat}">${cat}</button>`;
  }).join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-badge");
    if (!btn) return;
    const cat = btn.dataset.cat;
    localStorage.setItem("svuPreferredCategory", cat);
    // Go to filtered events
    window.location.href = `events.html?cat=${encodeURIComponent(cat)}`;
  });
}

/* Events filter */
function initEventsFilter() {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const catSelect = document.getElementById("filterCategory");
  const dateInput = document.getElementById("filterDate");
  const citySelect = document.getElementById("filterCity");
  const countEl = document.getElementById("resultsCount");

  // Fill category/city options
  if (catSelect) {
    catSelect.innerHTML =
      `<option value="">كل التصنيفات</option>` +
      CATEGORIES.filter((c) => c !== "الكل")
        .map((c) => `<option value="${c}">${c}</option>`)
        .join("");
  }

  if (citySelect) {
    const cities = [...new Set(EVENTS.map((e) => e.city))];
    citySelect.innerHTML =
      `<option value="">كل المواقع</option>` +
      cities.map((c) => `<option value="${c}">${c}</option>`).join("");
  }

  // From URL or localStorage
  const params = new URLSearchParams(window.location.search);
  let initialCat = params.get("cat") || localStorage.getItem("svuPreferredCategory") || "";
  if (initialCat === "الكل") initialCat = "";
  if (catSelect && initialCat) catSelect.value = initialCat;

  function render() {
    const q = (searchInput?.value || "").trim().toLowerCase();
    const cat = catSelect?.value || "";
    const date = dateInput?.value || "";
    const city = citySelect?.value || "";

    const filtered = EVENTS.filter((e) => {
      const matchQ =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.short.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q);
      const matchCat = !cat || e.category === cat;
      const matchDate = !date || e.date === date;
      const matchCity = !city || e.city === city;
      return matchQ && matchCat && matchDate && matchCity;
    });

    if (countEl) countEl.textContent = `عدد النتائج: ${filtered.length}`;

    if (!filtered.length) {
      grid.innerHTML = `
        <div class="col-12">
          <div class="empty-state">
            <i class="bi bi-search"></i>
            <h4>لا توجد فعاليات مطابقة</h4>
            <p>جرّب تغيير كلمات البحث أو إزالة بعض الفلاتر.</p>
          </div>
        </div>`;
      return;
    }

    grid.innerHTML = filtered
      .map((e) => `<div class="col-md-6 col-lg-4 mb-4">${createEventCard(e)}</div>`)
      .join("");
  }

  [searchInput, catSelect, dateInput, citySelect].forEach((el) => {
    if (!el) return;
    el.addEventListener("input", render);
    el.addEventListener("change", () => {
      if (el === catSelect) {
        localStorage.setItem("svuPreferredCategory", catSelect.value || "الكل");
      }
      render();
    });
  });

  const resetBtn = document.getElementById("resetFilters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (catSelect) catSelect.value = "";
      if (dateInput) dateInput.value = "";
      if (citySelect) citySelect.value = "";
      localStorage.setItem("svuPreferredCategory", "الكل");
      render();
    });
  }

  render();
}

/* Event detail page */
function initEventDetail() {
  const container = document.getElementById("eventDetail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const event = getEventById(params.get("id") || 1);

  if (!event) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="bi bi-exclamation-circle"></i>
        <h4>الفعالية غير موجودة</h4>
        <a href="events.html" class="btn btn-svu mt-3">العودة للفعاليات</a>
      </div>`;
    return;
  }

  document.title = `${event.title} | دليل فعاليات الجامعة الافتراضية`;

  container.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-8">
        <img src="${event.image}" alt="${event.title}" class="detail-hero-img mb-3">
        <h1 class="fw-bold mb-3">${event.title}</h1>
        <span class="badge text-white badge-${event.category} mb-3">${event.category}</span>
        ${event.today ? '<span class="badge bg-danger mb-3 me-2">فعالية اليوم</span>' : ""}
        <p class="lead text-muted">${event.description}</p>

        <h4 class="section-title mt-4">معرض الصور</h4>
        <div class="row g-2 mt-2 mb-4">
          ${event.gallery
            .map(
              (src) => `
            <div class="col-4">
              <img src="${src}" alt="صورة من الفعالية" class="gallery-thumb" data-bs-toggle="modal" data-bs-target="#galleryModal" data-full="${src}">
            </div>`
            )
            .join("")}
        </div>

        <div class="d-flex flex-wrap gap-2 mb-4">
          <button type="button" class="btn btn-svu" id="addToCalendar">
            <i class="bi bi-calendar-plus"></i> أضف للتقويم
          </button>
          <button type="button" class="btn btn-svu-outline" id="shareEvent">
            <i class="bi bi-share"></i> شارك
          </button>
          <button type="button" class="btn btn-coral" data-book="${event.id}">
            <i class="bi bi-ticket-perforated"></i> احجز مكانًا
          </button>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="detail-meta-box mb-3">
          <h5 class="fw-bold mb-3">معلومات الفعالية</h5>
          <p><i class="bi bi-calendar3 text-teal"></i> <strong>التاريخ:</strong><br>${formatDateAr(event.date)}</p>
          <p><i class="bi bi-clock"></i> <strong>الوقت:</strong><br>${event.time}</p>
          <p><i class="bi bi-geo-alt"></i> <strong>المكان:</strong><br>${event.location}</p>
          <p class="mb-0"><i class="bi bi-pin-map"></i> <strong>المدينة:</strong><br>${event.city}</p>
        </div>
        <div class="map-placeholder">
          <span><i class="bi bi-geo-alt-fill text-danger"></i> ${event.location}</span>
        </div>
      </div>
    </div>
  `;

  // Related events
  const related = document.getElementById("relatedEvents");
  if (related) {
    const list = EVENTS.filter((e) => e.category === event.category && e.id !== event.id).slice(0, 3);
    related.innerHTML = list.length
      ? list.map((e) => `<div class="col-md-4 mb-3">${createEventCard(e, { compact: true })}</div>`).join("")
      : `<div class="col-12"><p class="text-muted">لا توجد فعاليات ذات صلة حاليًا.</p></div>`;
  }

  // Add to calendar (ICS)
  document.getElementById("addToCalendar")?.addEventListener("click", () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `SUMMARY:${event.title}`,
      `DTSTART:${event.date.replace(/-/g, "")}`,
      `DESCRIPTION:${event.short}`,
      `LOCATION:${event.location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `svu-event-${event.id}.ics`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("تم تنزيل ملف التقويم بنجاح");
  });

  // Share
  document.getElementById("shareEvent")?.addEventListener("click", async () => {
    const shareData = {
      title: event.title,
      text: event.short,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast("تم نسخ رابط الفعالية");
      }
    } catch {
      /* Share cancelled */
    }
  });

  // Gallery modal
  document.querySelectorAll(".gallery-thumb").forEach((img) => {
    img.addEventListener("click", () => {
      const full = document.getElementById("galleryModalImg");
      if (full) full.src = img.dataset.full || img.src;
    });
  });
}

/* Contact form */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const alertBox = document.getElementById("formAlert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");
    let valid = true;

    [name, email, message].forEach((el) => el.classList.remove("is-invalid", "is-valid"));

    if (!name.value.trim() || name.value.trim().length < 3) {
      name.classList.add("is-invalid");
      valid = false;
    } else {
      name.classList.add("is-valid");
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email.value.trim())) {
      email.classList.add("is-invalid");
      valid = false;
    } else {
      email.classList.add("is-valid");
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      message.classList.add("is-invalid");
      valid = false;
    } else {
      message.classList.add("is-valid");
    }

    if (!alertBox) return;

    if (!valid) {
      alertBox.className = "alert alert-danger";
      alertBox.innerHTML = `<i class="bi bi-exclamation-triangle"></i> يرجى تصحيح الحقول المحددة والمحاولة مجددًا.`;
      alertBox.classList.remove("d-none");
      return;
    }

    alertBox.className = "alert alert-success";
    alertBox.innerHTML = `<i class="bi bi-check-circle"></i> شكرًا ${name.value.trim()}! تم استلام رسالتك وسيتم الرد قريبًا.`;
    alertBox.classList.remove("d-none");
    form.reset();
    [name, email, message].forEach((el) => el.classList.remove("is-valid"));
  });
}

/* Booking modal (bonus) */
function initBookingModal() {
  let modalEl = document.getElementById("bookingModal");
  if (!modalEl) {
    modalEl = document.createElement("div");
    modalEl.id = "bookingModal";
    modalEl.className = "modal fade";
    modalEl.tabIndex = -1;
    modalEl.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="border-radius:14px;">
          <div class="modal-header border-0">
            <h5 class="modal-title fw-bold">حجز مكان في الفعالية</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p class="text-muted" id="bookingEventTitle"></p>
            <div class="mb-3">
              <label class="form-label">الاسم الكامل</label>
              <input type="text" class="form-control" id="bookingName" placeholder="اسمك كما في بطاقة الجامعة">
            </div>
            <div class="mb-3">
              <label class="form-label">الرقم الجامعي</label>
              <input type="text" class="form-control" id="bookingId" placeholder="مثال: 286892">
            </div>
            <div id="bookingAlert" class="alert d-none"></div>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
            <button type="button" class="btn btn-svu" id="confirmBooking">تأكيد الحجز</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modalEl);
  }

  let currentEventId = null;

  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-book]");
    if (!btn) return;
    currentEventId = btn.dataset.book;
    const event = getEventById(currentEventId);
    const titleEl = document.getElementById("bookingEventTitle");
    if (titleEl && event) titleEl.textContent = event.title;
    document.getElementById("bookingAlert")?.classList.add("d-none");
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  });

  document.getElementById("confirmBooking")?.addEventListener("click", () => {
    const name = document.getElementById("bookingName");
    const sid = document.getElementById("bookingId");
    const alert = document.getElementById("bookingAlert");
    if (!name.value.trim() || !sid.value.trim()) {
      alert.className = "alert alert-warning";
      alert.textContent = "يرجى إدخال الاسم والرقم الجامعي.";
      alert.classList.remove("d-none");
      return;
    }
    alert.className = "alert alert-success";
    alert.textContent = "تم حجز مكان بنجاح";
    alert.classList.remove("d-none");
    setTimeout(() => {
      bootstrap.Modal.getInstance(modalEl)?.hide();
      name.value = "";
      sid.value = "";
      showToast("تم حجز مكان بنجاح");
    }, 1200);
  });
}

/* Dark mode + scroll top */
function initThemeToggle() {
  const saved = localStorage.getItem("svuDarkMode") === "1";
  if (saved) document.body.classList.add("dark-mode");

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.innerHTML = document.body.classList.contains("dark-mode")
      ? '<i class="bi bi-sun-fill"></i>'
      : '<i class="bi bi-moon-stars-fill"></i>';
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("svuDarkMode", isDark ? "1" : "0");
      btn.innerHTML = isDark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
    });
  });
}

function initScrollTop() {
  let btn = document.getElementById("scrollTopBtn");
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "scrollTopBtn";
    btn.type = "button";
    btn.setAttribute("aria-label", "العودة للأعلى");
    btn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(btn);
  }
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 350);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function showToast(msg) {
  let toast = document.getElementById("svuToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "svuToast";
    toast.className = "position-fixed bottom-0 start-50 translate-middle-x p-3";
    toast.style.zIndex = "1100";
    toast.innerHTML = `
      <div class="toast align-items-center text-bg-dark border-0" role="alert">
        <div class="d-flex">
          <div class="toast-body"></div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>`;
    document.body.appendChild(toast);
  }
  toast.querySelector(".toast-body").textContent = msg;
  const t = bootstrap.Toast.getOrCreateInstance(toast.querySelector(".toast"));
  t.show();
}

function setActiveNav() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".svu-navbar .nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* Init on load */
document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  initThemeToggle();
  initScrollTop();
  initFeaturedSlider();
  initLatestEvents();
  initCategoryBadges();
  initEventsFilter();
  initEventDetail();
  initContactForm();
  initBookingModal();
});
