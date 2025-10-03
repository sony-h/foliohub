"use client";

const servicesData = [
  {
    id: "01",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, enim?",
  },
  {
    id: "02",
    title: "Mobile Development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, enim?",
  },
  {
    id: "03",
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, enim?",
  },
  {
    id: "04",
    title: "Data Analytics",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, enim?",
  },
];
export default function Services() {
  return (
    <section className="px-[8%] lg:px-[16%] py-15 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="service-card group py-15 px-10 border border-gray-800 rounded-xl transition-all duration-500 cursor-pointer hover:border-[var(--primary-color)]"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-6xl stroke-text font-bold text-gray-400 transition-colors duration-300">
                {service.id}
              </h3>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-black transition group-hover:bg-[var(--primary-color)] group-hover:text-white duration-300">
                <i className="bi bi-arrow-up-right text-3xl"></i>
              </div>
            </div>

            <h2 className="text-4xl font-normal font-unbounded mb-5 transition-colors duration-300 group-hover:text-[var(--primary-color)]">
              {service.title}
            </h2>

            <p className="text-gray-400 text-lg">{service.desc}</p>

            <div className="border-t border-gray-700 group-hover:border-[var(--primary-color)] mt-5 duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
