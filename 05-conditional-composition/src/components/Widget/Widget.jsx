import './widget.css'

const Widget = ({ title, children }) => {
  return (
    <div className='widget'>
      <h2 className='widget-title'>{title}</h2>
      <div className='widget-content'>
        {children}
      </div>
    </div>
  )
}

export default Widget
