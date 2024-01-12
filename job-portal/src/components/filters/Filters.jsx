import s from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={s.drops}>
      <select name="job-role" id="">
        <option value="" disabled hidden>
          Job Role
        </option>
        <option value="UI Designer">UI Designer</option>
        <option value="UX Designer">UX Designer</option>
        <option value="Front-End Developer">Front-End Developer</option>
        <option value="Back-End Developer">Back-End Developer</option>
      </select>

      <select name="job-type" id="">
        <option value="" disabled hidden>
          Job Type
        </option>
        <option value="Designer">Onsight</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select name="job-location" id="">
        <option value="" disabled hidden>
          Job Location
        </option>
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Begalore">Begalore</option>
        <option value="Delhi">Delhi</option>
      </select>
      <select name="job-location" id="">
        <option value="" disabled hidden>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior">Junior Level (0-2years)</option>
        <option value="Mid Leve">Mid Level (2-4years)</option>
        <option value="Senior Level">Senior Level (4years onwards)</option>
      </select>

      <button>Search</button>
    </div>
  );
};

export default Filters;
