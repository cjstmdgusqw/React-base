function Detailform(){
    return(
        <section id="./writeForm">
		<h2>게시판글상세</h2>
		<form action="/boardmoify" method="post">
		<input type="hidden" name="num" value=""/>
			<table>
				<tr>
					<td class="td_left"><label for="writer">글쓴이</label></td>
					<td class="td_right"><input type="text" name="writer"
						id="writer" readonly="readonly" value=""/></td>
				</tr>
				<tr>
					<td class="td_left"><label for="subject">제 목</label></td>
					<td class="td_right"><input name="subject" type="text"
						id="subject" value=""/></td>
				</tr>
				<tr>
					<td class="td_left"><label for="content">내 용</label></td>
					<td><textarea id="content" name="content"
							cols="40" rows="15" ></textarea></td>
				</tr>

				<tr>
					<td class="td_left"><label for="content">이미지</label></td>
					<td><img src="/image/" width="100px" height="100px"/></td>
				</tr>
			
			</table>
			<section id="commandCell">
				<input type="submit" value="수정"/>&nbsp;&nbsp;
				<a href="/boardlist">목록</a>
			</section>
		</form>
	</section>
    )
}

export default Detailform;