import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail } from "../../../../redux/actions/actions";
import style from "../PokeDetail/PokemonDetail.module.css";

const PokemonDetail = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id)).then(() => setLoading(false));
    return () => dispatch(clearDetail());
  }, [id, dispatch]);
  const detailPoke = useSelector((state) => state.detail);

  return (
    <div>
      <>
        {loading ? (
          <div>
            <span className={style.loader}></span>
          </div>
        ) : (
          <div>
            <div className={style.backHome}>
              <Link className={style.backHomeLink} to="/home">
                Back Home
              </Link>
            </div>
            <div className={style.detailContainer}>
              <div className={style.imgDetail}>
                <img src={detailPoke?.image} alt={"imgPoke"} />
              </div>
              <div className={style.spanPoke}>
                <span>
                  <h1>{detailPoke?.name}</h1>
                </span>
              </div>
              <div className={style.infoPoke}>
                <h2>id:{detailPoke?.id}</h2>
                <h2>life: {detailPoke?.life}</h2>
                <h2>defense: {detailPoke?.defense}</h2>
                <h2>attack: {detailPoke?.attack}</h2>
                <h2>speed: {detailPoke?.speed}</h2>
                <h2>height: {detailPoke?.height}</h2>
                <h2>weight: {detailPoke?.weight}</h2>

                <h2>types: {detailPoke?.types.join(" ")}</h2>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default PokemonDetail;
