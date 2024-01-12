import s from "./JobCards.module.css";

const JobCards = () => {
  return (
    <div className={s.cards}>
      <div className={s.left}>
        <div className={s.heading}>
          <h4>Frontend Developer</h4>
          <h4>-</h4>
          <h4>Amazon</h4>
        </div>

        <div className={s.filters}>
          <p>Full Time</p>
          <p>&#183;</p>
          <p>Fresher</p>
          <p>&#183;</p>
          <p>In-Office</p>
        </div>

        <div className={s.tags}>
          <p>Javascript</p>
          <p>Next.js</p>
          <p>Tailwind CSS</p>
        </div>
      </div>
      <div className={s.right}>
        <p>1 day ago</p>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default JobCards;
