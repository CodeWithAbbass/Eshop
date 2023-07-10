import { Helmet } from "react-helmet";

const Meta = ({ title, description, keyword }) => {
  return (
    <div className="Meta">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Helmet>
    </div>
  );
};

export default Meta;
