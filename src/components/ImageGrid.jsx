import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../actions';
import Stats from './Stats';

const ImageGrid = ({ images, isLoading, error, loadImages, imageStats }) => {

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className="content">
      <section className="grid">
        {images.map(image => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(
                image.height / image.width,
            )}`}
          >
            <Stats stats={imageStats[image.id]} />
            <img
                src={image.urls.small}
                alt={image.user.username}
            />
          </div>
        ))}
      </section>
      {error && <div className="error">{JSON.stringify(error)}</div>}
     
      <button onClick={() => !isLoading && loadImages()}>Load Images</button>
    </div>
  );
}

const mapStateToProps = ({images, isLoading, error, imageStats}) => ({
  images, isLoading, error, imageStats
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
