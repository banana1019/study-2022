create table my_board (
  board_no integer not null,
  title varchar(255) not null,
  content text not null,
  created_date datetime default now(),
  view_count int default 0
);

alter table my_board
  add constraint primary key(board_no);

alter table my_board
  modify column board_no int not null auto_increment;
