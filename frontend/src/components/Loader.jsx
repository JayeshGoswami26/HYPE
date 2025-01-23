import {loadingSvg} from '../../public/index.js'

function Loader({className}) {
  return (
    <div className={className}>
        <img draggable={`false`} src={loadingSvg} alt="" />
    </div>
  )
}

export default Loader