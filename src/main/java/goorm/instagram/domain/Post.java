package goorm.instagram.domain;


import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Post {

    /*
    조회수는 영상에만 나오므로 제외
     */

    //사용자
    private String id;

    //게시물
    private int postindex;         //게시물 번호
    private String postdetail;      //내용
    private String postimage;       //사진
    private int postlike;           //좋아요

    private Date create_dt;         //작성일
    private Date update_dt;         //업뎃일

}
