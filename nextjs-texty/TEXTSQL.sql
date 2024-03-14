CREATE DATABASE texty;
DROP DATABASE texty;
USE texty;


SHOW TABLES;

desc tbl_quest;

CREATE TABLE tbl_quest(
    seq INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    answer1 TEXT NOT NULL,
    answer2 TEXT NOT NULL,
    answer3 TEXT NOT NULL
);

-- 질문 데이터 삽입
INSERT INTO tbl_quest (question, answer1, answer2, answer3) 
VALUES 
('새로운 도전에 대한 태도는 어떠신가요?', '두렵다', '설렌다', '두렵고도 설렌다'),
('어떤 상황에서 가장 스트레스를 받는 경향이 있나요?', '사람이 많은 곳', '계획이 틀어졌을 때', '스스로의 기대치에 못미쳤을 때'),
('다른 사람들의 감정에 민감한 편인가요?', '예', '아마도', '아니오'),
('어떤 종류의 취미나 관심사를 가지고 있나요?', '혼자 즐길 수 있는 취미', '여러명과 함께할 수 있는 취미', '취미가 없다'),
('여행 좋아하세요? 만약 여행을 떠난다면 어디로 가고 싶나요?', '바다', '산', '여행을 좋아하지 않음.'),
('당신이 가장 중요하게 생각하는 가치관은 무엇인가요?', '재산', '권력', '명예'),
('당신은 지금 당신의 등 뒤에 누군가 서 있음을 느낄 수 있나요?', '예', '아니오', '예?'),
('당신은 이 실험이 단순히 관찰만을 목적으로 하는 것이 아니라고 생각하나요?', '예', '아니오', '뭐?'),
('마지막 질문입니다. 조금 더 협력해주시겠니?', '예', '아니오', '그니까 뭐를?'),
('아주 좋아요! 당신이 그렇게 말할 줄 알고 있었어요.', '...', '...', '...'),
('저희는 당신의 협력에 늘 감사드릴겁니다. 행운을 빌어요!', '...', '...', '...');

SELECT * FROM inventory_items;

SELECT * FROM inventory_items;

DROP TABLE inventory_items;

CREATE TABLE IF NOT EXISTS inventory_items (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  visible BOOLEAN DEFAULT false
);

-- Insert paper item
INSERT INTO inventory_items (id, name, description, visible)
VALUES ('paper', '종이' , '010-9462-5221 이라고 적혀있다.', true);