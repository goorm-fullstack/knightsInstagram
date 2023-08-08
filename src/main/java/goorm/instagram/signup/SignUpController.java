package goorm.instagram.signup;

import org.springframework.web.bind.annotation.*;

import java.util.List;

public class SignUpController {

    //TODO 프로필 정보수정 - 프로필 사진 바꾸기, 웹사이트 주소, 소개란, 성별, 프로필에 계정 추천 표시
    //TODO 가입 - 휴대폰or이메일, 성명, 사용자이름, 비밀번호
    //TODO 탈퇴 - 그냥 프로필 정보수정에 추가
    //TODO 로그인기능 - jwt and oauth

    @PostMapping("/create")
    public void create(@RequestBody @Valid ItemCreate request){
        request.validate();
        itemService.save(request);
    }

    @GetMapping("/create/{itemId}")
    public ItemResponse get(@PathVariable Long itemId){
        return itemService.get(itemId);
    }

    @GetMapping("/create")
    public List<ItemResponse> getList(@ModelAttribute ItemSearch itemSearch){
        return itemService.getList(itemSearch);
    }

    @PatchMapping("/create/{itemId}")
    public void edit(@PathVariable Long itemId, @RequestBody @Valid ItemEdit request){
        itemService.edit(itemId, request);
    }

    @DeleteMapping("/create/{itemId}")
    public void delete(@PathVariable Long itemId){
        itemService.delete(itemId);
    }

}
