import ReactModal, { Props as ReactModalProps } from 'react-modal'

// Components
import ModalHeader from './Header'
import ModalContent from './Content'

ReactModal.setAppElement('#root')

/**
 * styles
 */
const baseStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    outline: 'none',
    border: 'none',
    background: 'transparent',
    maxWidth: '768px',
    width: '100%',
    borderRadius: 16,
    zIndex: 1000
  },
  overlay: {
    backgroundColor: 'rgba(var(--color-card), 0.6)',
    backdropFilter: 'blur(22px)'
  }
}

interface ModalProps extends ReactModalProps {
  children: React.ReactNode
}

interface CompoundedComponent {
  Header: typeof ModalHeader
  Content: typeof ModalContent
}

const Modal: React.FC<ModalProps> & CompoundedComponent = props => {
  const { children, style, ...rest } = props
  const modalStyles = { ...baseStyles, ...style }
  return (
    <ReactModal tw="relative" style={modalStyles} {...rest}>
      {children}
    </ReactModal>
  )
}

Modal.Header = ModalHeader
Modal.Content = ModalContent

export default Modal
