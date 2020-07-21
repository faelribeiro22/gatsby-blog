import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import PropTypes from "prop-types"
import * as S from "./styled"

const RecommendedPosts = ({ url, title }) => {
  const completeURL = `https://rafaelribeiro.dev${url}`
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="disqus_s0TxGWJvxm"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

RecommendedPosts.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default RecommendedPosts
