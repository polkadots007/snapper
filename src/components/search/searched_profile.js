import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SearchedProfile({ username }) {
  return (
    <div className="flex items-center justify-start w-[30rem] h-14 p-4 bg-white z-10 absolute border-x last:border-b border-gray-primary">
      {username !== 'No results found' ? (
        <>
          <img
            className="rounded-full w-8 h-8 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
            alt=""
          />
          <Link to={`/p/${username}`}>
            <p className="font-bold text-sm">{username}</p>
          </Link>
        </>
      ) : (
        <p className="font-bold text-sm">{username}</p>
      )}
    </div>
  );
}

SearchedProfile.propTypes = {
  username: PropTypes.string.isRequired
};