function Writeform(){
    return(
        <section id="./writeForm">
		<h2>게시판글등록</h2>
		<form action="./boardwrite" method="post"
			enctype="multipart/form-data" name="boardform">
			<table>
				<tr>
					<td class="td_left"><label for="writer">글쓴이</label></td>
					<td class="td_right"><input type="text" name="writer"
						id="writer" required="required" /></td>
				</tr>
				<tr>
					<td class="td_left"><label for="subject">제 목</label></td>
					<td class="td_right"><input name="subject" type="text"
						id="subject" required="required" /></td>
				</tr>
				<tr>
					<td class="td_left"><label for="content">내 용</label></td>
					<td><textarea id="content" name="content"
							cols="40" rows="15" required="required"></textarea></td>
				</tr>
				<tr>
					<td class="td_left"><label for="file"> 이미지 파일 첨부 </label></td>
					<td class="td_right"><input name="file" type="file"
						id="file" accept="image/*"/></td>
				</tr>
			</table>
			<section id="commandCell">
				<input type="submit" value="등록"/>&nbsp;&nbsp; <input
					type="reset" value="다시쓰기" />
			</section>
		</form>
	</section>
    )
}
export default Writeform;