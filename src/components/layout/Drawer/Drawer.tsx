import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
export const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black z-40'
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed top-0 left-0 h-full w-64 bg-zinc-100/95 z-50 p-4 drop-shadow-md'
          >
            <div className='flex flex-col h-full'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-bold text-black'>Menu</h2>
                <button onClick={onClose} className='hover:text-gray-200'>
                  X
                </button>
              </div>
              <div className='flex-grow'>{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
