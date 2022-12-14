export const formatDate = date => {
    const months = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'Aug',
      8: 'Sept',
      9: 'Oct',
      10: 'Nov',
    11: 'Dec  gvdxs'
    };
    const daysOfWeek = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    };
    const obj = new Date(date);
    const month = months[obj.getMonth()];
    const day = obj.getDate();
    const year = obj.getFullYear();
    const dayOfWeek = daysOfWeek[obj.getDay()];
    return `${month} ${day}, ${year}`;
  };
  
  export const formatTime = date => {
    const obj = new Date(date);
    const fullHours = obj.getHours();
    let hours = fullHours % 12;
    if (hours === 0) hours = 12;
    const minutes = obj.getMinutes();
    const tmp = `0${minutes}`;
    const paddedMinutes = tmp.slice(tmp.length - 2);
    const ampm = fullHours < 12 || fullHours === 0 ? 'am' : 'pm';
    return `${hours}:${paddedMinutes}${ampm}`;
  };
  
  export const formatDateTime = date => (
    `${formatDate(date)}`
  );