const NoticiasItem = (props) => {
  const { image, title, body } = props;

  return (
    <div className="mg">
      <div className="contenct">
        <div className="not">
          <div data-aos="fade-up">
            <div className="noticias">
              <img src={image} alt="" />
              <h4>{title}</h4>
              <div
                className="cuerpo"
                dangerouslySetInnerHTML={{ __html: body }}
              />
              {/* <hr /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasItem;
