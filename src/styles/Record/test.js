{
  symptoms.map(symptom, (idx) =>
    categories.find((category) => category === symtom) ? (
      <S.ActiveCategoryList onClick={() => onClickHandler(symptom)} key={idx}>
        {symptom}
      </S.ActiveCategoryList>
    ) : (
      <S.CategoryList onClick={() => onClickHandler(symptom)} key={idx}>
        {symptom}
      </S.CategoryList>
    )
  );
}
