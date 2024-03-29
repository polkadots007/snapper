import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { DEFAULT_IMG_SRC } from '../../constants/paths';

export default function User({ username, fullName }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-14 h-14 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = DEFAULT_IMG_SRC;
          }}
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
}

// export default memo(User);

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string
};

// User.whyDidYouRender = true;
