const dates = {
  sevgili: {
    date: new Date("2017-11-22"),
    text: "Önce Sevgili Olduk 💕",
    img: "assets/sevgili.jpg",
    audio: "assets/sevgili.mp3"
  },
  teklif: {
    date: new Date("2024-08-13"),
    text: "Önce Evet Dedin 💍",
    img: "assets/teklif.jpg",
    audio: "assets/teklif.mp3"
  },
  nisan: {
    date: new Date("2024-11-16"),
    text: "Önce Nişanlandık 🎉",
    img: "assets/nisan.jpg",
    audio: "assets/nisan.mp3"
  },
  nikah: {
    date: new Date("2025-05-03"),
    text: "Gün Kaldı 💒",
    img: "assets/nikah.jpg",
    audio: "assets/dugun-marsi.mp3"
  }
};

let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");
let modalText = document.getElementById("modalText");
let modalAudio = document.getElementById("modalAudio");

function openModal(key) {
  const now = new Date();
  let data = dates[key];

  modal.style.display = "flex";
  modalImg.src = data.img;

  let duration = key === "nikah"
    ? formatDateDifference(now, data.date)  // geri sayım
    : formatDateDifference(data.date, now); // ileri sayım

  modalText.innerText = `${duration} ${data.text}`;
  modalAudio.src = data.audio;
  modalAudio.play();
}

function closeModal() {
  modal.style.display = "none";
  modalAudio.pause();
  modalAudio.currentTime = 0;
}

function formatDateDifference(from, to) {
  let start = new Date(from);
  let end = new Date(to);

  if (start > end) [start, end] = [end, start];

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    let prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  let result = [];

  if (years > 0) result.push(`${years} yıl`);
  if (months > 0) result.push(`${months} ay`);
  result.push(`${days} gün`);

  return result.join(" ");
}
