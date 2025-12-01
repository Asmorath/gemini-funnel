function getNextFriday8PMMST() {
  const now = new Date();
  const mstOffset = -7; // MST base offset
  const localOffset = now.getTimezoneOffset() / 60;
  const mstNow = new Date(now.getTime() + (mstOffset + localOffset) * 3600000);

  const day = mstNow.getDay();
  const diff = (5 - day + 7) % 7;
  const nextFriday = new Date(mstNow);
  nextFriday.setDate(mstNow.getDate() + diff
