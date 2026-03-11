import Menubar from './ui/menubar/Menubar';
import styles from './App.module.scss'

export default function App() {
  const {app} = styles

  return (
    <div className={app}>
      <Menubar />

    </div>
  )
}
