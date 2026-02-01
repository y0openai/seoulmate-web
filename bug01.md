# BUG-01: Meet the Team 기능 레이아웃 불일치

## 📋 버그 요약
Meet the Team 모달 기능의 레이아웃이 디자인 의도와 다르게 구현됨

## 🔍 상세 설명
FounderStory 섹션에 추가된 "Meet the Team" 인터랙티브 모달의 레이아웃이 원래 디자인 의도와 일치하지 않음.

## 📍 위치
- **컴포넌트**: `src/components/FounderStory.jsx` (line 173-262)
- **스타일**: `src/components/FounderStory.css` (line 375-664)

## 🔄 재현 방법
1. https://layo-web.web.app 접속
2. FounderStory 섹션으로 스크롤
3. 하단 "Meet the Team" 카드 클릭
4. 모달 레이아웃 확인

## ❌ 실제 동작
현재 구현된 레이아웃:
- 확장 가능한 카드 형태
- 모달 내부: 일러스트 상단 + 타임라인 하단
- 고정된 레이아웃 구조

## ✅ 예상 동작 (디자인 의도)
[디자인 의도에 대한 상세 설명 필요]
- 레이아웃 구조는?
- 콘텐츠 배치는?
- 인터랙션 방식은?

## 🎨 디자인 참고자료
- 원본 디자인 파일: [링크 필요]
- 모범 사례: [참고 링크]

## 💻 환경 정보
- **프레임워크**: React 19 + Vite
- **애니메이션**: Framer Motion
- **배포 환경**: Firebase Hosting
- **브라우저**: [테스트된 브라우저 정보 필요]
- **디바이스**: Desktop, Tablet, Mobile

## 📊 영향 범위
- ✅ 기능적으로 동작함
- ❌ 레이아웃이 디자인 의도와 불일치
- ⚠️ 사용자 경험에 영향 가능

## 🔧 관련 파일
```
src/components/FounderStory.jsx       # 모달 로직
src/components/FounderStory.css       # 스타일링
src/locales/en.json                   # 영어 번역
src/locales/ko.json                   # 한국어 번역
src/locales/ja.json                   # 일본어 번역
public/assets/locals/download (8).png # 창업자 일러스트
```

## 🎯 우선순위
- [ ] P0 - Critical (즉시 수정 필요)
- [x] P1 - High (다음 배포 전 수정)
- [ ] P2 - Medium (2주 내 수정)
- [ ] P3 - Low (백로그)

## 📝 추가 메모
- 커밋 해시: `ef41739`
- 구현 날짜: 2026-02-02
- 배포 URL: https://layo-web.web.app

## 🔄 다음 단계
1. [ ] 디자인 의도 확인 및 문서화
2. [ ] 현재 레이아웃과 비교 분석
3. [ ] 수정 방향 결정
4. [ ] 구현 및 테스트
5. [ ] 재배포

---

**작성자**: Claude Sonnet 4.5
**작성일**: 2026-02-02
**상태**: 🔴 Open
