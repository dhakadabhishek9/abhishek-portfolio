import React from "react";

const Experience = () => {
  return (
    <section
      id='experience'
      className='py-20 bg-gradient-to-br from-slate-50 to-blue-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Experience
        </h2>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
              <div>
                <h3 className='text-2xl font-bold text-gray-800'>
                  Solution Engineer
                </h3>
                <p className='text-xl text-blue-600 font-semibold'>
                  Gammastack
                </p>
                <p className='text-gray-600'>Indore, India</p>
              </div>
              <div className='mt-4 md:mt-0'>
                <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold'>
                  Jan 2022 – Present
                </span>
              </div>
            </div>
            <div className='space-y-4'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-3'>
                  <h4 className='font-semibold text-gray-800 flex items-center'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
                    Technical Leadership
                  </h4>
                  <ul className='space-y-2 text-gray-600 ml-5'>
                    <li>• Led design of multitenant frontend systems</li>
                    <li>• Managed cross-functional teams for 6+ projects</li>
                    <li>• Conducted code reviews and maintained standards</li>
                  </ul>
                </div>
                <div className='space-y-3'>
                  <h4 className='font-semibold text-gray-800 flex items-center'>
                    <div className='w-2 h-2 bg-purple-600 rounded-full mr-3'></div>
                    Development & Optimization
                  </h4>
                  <ul className='space-y-2 text-gray-600 ml-5'>
                    <li>• Built scalable web apps with React & Next.js</li>
                    <li>• Reduced load time by 3 seconds</li>
                    <li>• Integrated real-time updates with Socket.io</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
