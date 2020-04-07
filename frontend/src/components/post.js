import React from "react";
import { Card, Avatar } from "antd";
import { HeartOutlined, HeartFilled, HeartTwoTone } from "@ant-design/icons";
import CommentList from "./commentList";

const Post = ({ post, handleLike }) => {
  const { author, caption, location, photo, tag_set, is_like } = post;
  const { username, name, avatar_url } = author;

  return (
    <div>
      <Card
        hoverable
        cover={<img src={photo} alt={caption} />}
        // FIXME: host지점을 로직으로 처리
        actions={[
          is_like ? (
            <HeartTwoTone
              twoToneColor="red"
              onClick={() => handleLike({ post, isLike: false })}
            />
          ) : (
            <HeartOutlined onClick={() => handleLike({ post, isLike: true })} />
          )
        ]}
      >
        <Card.Meta
          avatar={
            <Avatar
              size="large"
              icon={<img src={avatar_url} alt={username} />}
            />
          }
          title={location}
          description={caption}
          style={{ marginBottom: "0.5em" }}
        />
        <CommentList post={post} />
      </Card>
      {/* <img src={photo} alrt={caption} style={{ width: "100px" }} />
      {caption}, {location} */}
    </div>
  );
};

export default Post;
