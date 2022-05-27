create database studydb character set utf8mb4 collate utf8mb4_general_ci;

create table test (
    member_no int not null,
    name varchar(50) not null,
    age int not null,
    test_data text not null,
    address varchar(255) not null,
    gender varchar(10) not null,
    email varchar(50) not null,
    tel varchar(20) not null
);

alter table test
    add constraint primary key (member_no),
    modify column member_no int not null auto_increment;
