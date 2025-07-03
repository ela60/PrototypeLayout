type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded shadow-lg">
        <div className="flex justify-between items-center mb-4 text-gray-600">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 text-xl">&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
