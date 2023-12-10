import css from './Statistics.module.css';


const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
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
        {itemsWithColor.map(({ id, label, percentage, color }) => (
          <li key={id} className={css.item} style={{ '--random-color': color }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

