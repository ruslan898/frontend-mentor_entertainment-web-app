import { Link } from 'react-router-dom';
import styles from './Error.module.scss';

export default function Error() {
  const { error, errorTitle, errorLink } = styles;

  return (
    <div className={error}>
      <h1 className={errorTitle}>An error occured!</h1>
      <p>Could not find this page!</p>
      <Link to="/" className={errorLink}>
        Back to main page
      </Link>
    </div>
  );
}
