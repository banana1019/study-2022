package com.snuh.study.controller;

import static com.snuh.study.controller.ResultMap.SUCCESS;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import com.snuh.study.domain.Member;
import com.snuh.study.service.BoardService;

@RestController 
public class BoardController {

  // log를 출력하는 도구 준비
  private static final Logger log = LoggerFactory.getLogger(BoardController.class);

  @Autowired
  BoardService boardService;

  @RequestMapping("/board/list")
  public Object list() {
    log.error("error.....");
    log.warn("warn.....");
    log.info("info.....");
    log.debug("debug.....");
    log.trace("trace.....");

    log.info("게시물 목록 조회!");
    return new ResultMap().setStatus(SUCCESS).setData(boardService.list());
  }

  //  @RequestMapping("/board/add")
  //  public Object add(Board board, HttpSession session) {
  //    log.info("게시물 등록!"); // 운영자가 확인하기를 원하는 정보. 개발이 끝나고 여기까지만 출력
  //    log.debug(board.toString()); // 개발자가 확인하기를 원하는 정보. 개발하는 동안
  //
  //    //    System.out.println("BoardController.add() 호출됨!");
  //    Member member = (Member) session.getAttribute("loginUser");
  //
  //    board.setWriter(member);
  //    boardService.add(board);
  //    return new ResultMap().setStatus(SUCCESS);
  //  }


  //  @RequestMapping("/board/get")
  //  public Object get(int no) {
  //    Board board = boardService.get(no);
  //    if (board == null) {
  //      return new ResultMap().setStatus(FAIL).setData("해당 번호의 게시글이 없습니다.");
  //    }
  //    return new ResultMap().setStatus(SUCCESS).setData(board);
  //  }

  //  @RequestMapping("/board/update")
  //  public Object update(Board board, HttpSession session) {
  //    Member member = (Member) session.getAttribute("loginUser");
  //
  //    board.setWriter(member);
  //    int count = boardService.update(board);
  //
  //    if (count == 1) {
  //      return new ResultMap().setStatus(SUCCESS);
  //    } else {
  //      return new ResultMap().setStatus(FAIL).setData("게시글 번호가 유효하지 않거나 게시글 작성자가 아닙니다.");
  //    }
  //  }

  //  @RequestMapping("/board/delete")
  //  public Object delete(int no, HttpSession session) {
  //    Member member = (Member) session.getAttribute("loginUser");
  //
  //    Board board = new Board();
  //    board.setNo(no);
  //    board.setWriter(member);
  //
  //    int count = boardService.delete(board);
  //
  //    if (count == 1) {
  //      return new ResultMap().setStatus(SUCCESS);
  //    } else {
  //      return new ResultMap().setStatus(FAIL).setData("게시글 번호가 유효하지 않거나 게시글 작성자가 아닙니다.");
  //    }
  //  }
}




