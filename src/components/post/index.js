import { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Image from './image';
import Actions from './actions';
import Footer from './footer';
import Comments from './comments';

export default function Post({ content, expandAllComments }) {
  const commentInput = useRef(null);

  const handleFocus = () => commentInput.current.focus();

  return (
    <div className="w-[470px] rounded col-span-4 border bg-white border-gray-primary mb-12">
      <Header username={content.username} />
      <div className="bg-black-full flex justify-center items-center">
        <Image src={content.imageSrc} caption={content.caption} />
      </div>
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer caption={content.caption} username={content.username} />
      <Comments
        docId={content.docId}
        comments={content.comments.reverse()}
        posted={content.dateCreated}
        commentInput={commentInput}
        expandAll={expandAllComments}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired
  }),
  expandAllComments: PropTypes.bool
};
