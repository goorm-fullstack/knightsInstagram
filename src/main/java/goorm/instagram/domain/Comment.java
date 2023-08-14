package goorm.instagram.domain;

import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@ToString
public class Comment {

    // 자동 입력
    private String id; // 댓글 식별 ID(firebase 문서 ID 자동생성)
    private String postId; // 게시글 ID
    private String writer; // 작성자 이름
    private String profileImage; // 작성자 프로필 이미지
    private Date date; // 작성일(timestamp)

    // 사용자 입력(+수정 가능)
    private String content; // 댓글 내용

    // 좋아요
    private boolean like; // 좋아요 여부(T/F), 기본값 False
    private int likeNumber; // 좋아요 카운트, 기본값 0

}
