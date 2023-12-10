import css from './Statistics.module.css';

const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const calculateTextColor = (color) => {
  const hex = color.substring(1); // Remove #
  const r = parseInt(hex.substring(0, 2), 16); // Extract red
  const g = parseInt(hex.substring(2, 4), 16); // Extract green
  const b = parseInt(hex.substring(4, 6), 16); // Extract blue
  const luminance = (r * 0.299 + g * 0.587 + b * 0.114) / 255; // Calculate luminance
  return luminance > 0.5 ? '#000' : '#fff'; // Return black or white based on luminance
};

const Statistics = ({ title, stats }) => {
  const itemsWithColor = stats.map(({ id, label, percentage }) => ({
    id,
    label,
    percentage,
    color: generateRandomColor(),
  }));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {itemsWithColor.map(({ id, label, percentage, color }) => {
          const textColor = calculateTextColor(color);
          return (
            <li
              key={id}
              className={css.item}
              style={{
                '--random-color': color,
                color: textColor, // Apply calculated text color
              }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;


