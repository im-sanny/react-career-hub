import { MdLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-bold border border-[#7E90FE] text-[#9873FF] rounded mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-bold border border-[#7E90FE] text-[#9873FF] rounded">{job_type}</button>
        </div>
        <div className="mt-2 flex items-center">
            <h2 className="flex items-center"><MdLocationOn className="text-2xl mr-1" /> {location}</h2>

            <h2 className="flex items-center ml-4"><HiOutlineCurrencyDollar className="text-2xl mr-1"/>{salary}</h2>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
