package com.snuh.study.service;

import java.util.List;
import com.snuh.study.domain.Board;

public interface BoardService {

  int add(Board board);

  List<Board> list();

  Board get(int no);

  int update(Board board);

  int delete(Board board);
}







