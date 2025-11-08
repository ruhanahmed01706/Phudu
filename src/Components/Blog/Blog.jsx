import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Blog = () => {
  const doctorData = useLoaderData(); 
  const [appointments, setAppointments] = useState([]);

  
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("readList")) || [];
    // console.log("Stored IDs:", storedIds);
    // console.log("Doctor Data:", doctorData);

    
    const selected = doctorData.filter((doc) =>
      storedIds.includes(Number(doc.id))
    );

    // console.log("Selected Appointments:", selected);
    setAppointments(selected);
  }, [doctorData]);

  
  const handleCancel = (id) => {
    const storedIds = JSON.parse(localStorage.getItem("readList")) || [];
    const updatedIds = storedIds.filter((storedId) => storedId !== id);
    localStorage.setItem("readList", JSON.stringify(updatedIds));

    
    setAppointments((prev) => prev.filter((item) => item.id !== id));
  };

 
  const chartData = appointments.map((item) => ({
    name: item.name.split(" ")[1], 
    fee: item.fee,
  }));

  return (
    <div className="max-w-6xl mx-auto mt-10">
      
      <div className="bg-base-100 shadow-md rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-center mb-5">
          Fee Overview Chart
        </h2>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="fee" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-400 py-10">
            No chart data available
          </p>
        )}
      </div>

      
      <div className="border border-blue-400 rounded-2xl p-6 mb-10 bg-base-100">
        <h2 className="text-2xl font-bold text-center mb-6">
          My Today Appointments
        </h2>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-500">No Appointments Found</p>
        ) : (
          <div className="space-y-4">
            {appointments.map((item) => (
              <div
                key={item.id}
                className="card bg-base-100 shadow-md border border-gray-200"
              >
                <div className="card-body flex flex-col sm:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.degrees} | {item.college}
                    </p>
                    <p className="text-sm text-gray-400">
                      Fee: ${item.fee} | Experience: {item.experience}
                    </p>
                  </div>
                  <button
                    className="btn btn-error btn-sm mt-3 sm:mt-0"
                    onClick={() => handleCancel(item.id)}
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;