'use client'
import { motion } from 'framer-motion'
import { Badge } from './ui/badge'

const services = [
  {
    title: 'Web Development',
    description:
      'Custom websites built with modern technologies and best practices.',
    icon: (
      <svg
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      </svg>
    ),
  },
  {
    title: 'Print Services',
    description: 'High-quality printing for all your business needs.',
    icon: (
      <svg
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
        />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    description: 'SEO and marketing strategies to grow your online presence.',
    icon: (
      <svg
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
        />
      </svg>
    ),
  },
]

const Services = () => {
  return (
    <div>
      {/* Services Section */}
      <section className='bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-16'
          >
            <Badge>Our Speciality</Badge>
            <div className='flex gap-2 flex-col items-center justify-center text-center'>
              <h2 className='text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular mt-4 '>
                Everything you need to 
                <span className="block bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                succeed
                </span>
              </h2>
              <p className='text-lg leading-relaxed tracking-tight text-neutral-500 max-w-xl text-center dark:text-neutral-400'>
                From web development to print materials, we&apos;ve got you
                covered with comprehensive solutions for your business.
              </p>
            </div>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-12'>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group relative cursor-pointer'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 ease-in-out'></div>
                <div className='relative bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-[1.02] z-10 hover:border-slate-950 hover:border dark:hover:border-violet-600 dark:hover:border'>
                  <div className='flex flex-col items-center text-center'>
                    <div className='flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white mb-6'>
                      {service.icon}
                    </div>
                    <h3 className='text-sm md:text-lg tracking-tighter max-w-xl text-center font-regular'>
                      {service.title}
                    </h3>
                    <p className='text-lg leading-relaxed tracking-tight text-neutral-500 max-w-xl text-center dark:text-neutral-400'>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
