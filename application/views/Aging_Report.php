	<?php
	header('Content-type: application/excel');
	$filename = 'AdjustmentReport-'. date('mdY') .'.xls';
	header('Content-Disposition: attachment; filename='.$filename);
	date_default_timezone_set('Asia/Manila');
	$member_count = 0;
	$thirty = 0;
	$sixty = 0;
	$ninety = 0;
	$onetweny = 0;
	$above = 0;
	?>
	<html xmlns:x="urn:schemas-microsoft-com:office:excel">
		<head>
			<!--[if gte mso 9]>
			<xml>
				<x:ExcelWorkbook>
					<x:ExcelWorksheets>
						<x:ExcelWorksheet>
							<x:Name>Sheet 1</x:Name>
							<x:WorksheetOptions>
								<x:Print>
									<x:ValidPrinterInfo/>
								</x:Print>
							</x:WorksheetOptions>
						</x:ExcelWorksheet>
					</x:ExcelWorksheets>
				</x:ExcelWorkbook>
			</xml>
			<![endif]-->
		</head>
		<style>
			body {
				font-family: 'Times New Roman';
			}

			table {
				border-spacing: -1px;
				border-width:thin;
			}

			td {
				font-size: 100%;
				padding:5px;
				/* border: 1px solid black; */
			}
	
			@page { sheet-size: Legal-L; }
			
			@page {
				margin-top: 1cm;
				margin-bottom: 1cm;
				margin-left: 1cm;
				margin-right: 1cm;
				odd-footer-name: html_myFooter;
			}
			
			h1.bigsection {
					page-break-before: always;
					page: bigger;
			}

			.main_t td{
			}

			th {
				font-size: 100%;
				text-align:center;
				padding: 10px;
			}
	
		</style>
		<body>
			<?php if($records): ?>
			<div class="half_me">
				<h4 style="text-align:center;"><b>PUEBLO GOLF ESTATES HOMEOWNERS ASSOCIATION, INC.</b></h4>
				<p style="text-align:center;">Masterson Avenue, Upper Canitoan, Cagayan de Oro City, 9000</p>
				<p style="text-align:center;">Contact No.: 09551367134&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: pgehai.bod@gmail.com</p>
				<br>
				<h3 style="text-align:center;"><b>AGING OF RECEIVABLE DETAIL REPORT<br><br>As of <?php echo date('F j, Y'); ?></b></h3>
				<br>
				<table width="100%" border=1>
					<thdead>
						<tr>
							<th style="width:8%;">MemberID/ Contract#</th>
							<!-- <th style="width:8%;">SOANo</th> -->
							<th style="width:30%;">Last Name, First Name Middle Name Ext Name/ COMPANY NAME/ RENTER NAME</th>
							<th style="width:8%;">Due date</th>
							<th style="width:5%;">Aged Days</th>
							<th style="width:8%;">0-30 Days</th>
							<th style="width:8%;">31-60 Days</th>
							<th style="width:8%;">61-90 Days</th>
							<th style="width:8%;">91-120 Days</th>
							<th style="width:8%;">Above 120 Days</th>
							<th style="width:8%;">GRAND TOTAL</th>
						</tr>
					</thdead>
					<tbody>
						<?php foreach($records as $record): ?>
						<?php  
							$date1 = date_create($record->duedate);
							$date2 = date_create(date('Y-m-d'));
							$diff = date_diff($date1,$date2);
							$days = $diff->format("%a days");
						?>
						<tr>
							<td><?php echo $record->Contract_no ? $record->Contract_no : $record->MHOLID; ?></td>
							<!-- <td><?php //echo $record->xYear . $record->xMonth . "-" . $record->MHOLID; ?></td> -->
							<td><?php echo $record->LastName . ", " . $record->FirstName . " " . $record->MiddleName . " " . $record->ExtName; ?></td>
							<td style="text-align:center;"><?php echo $record->duedate; ?></td>
							<td style="text-align:center;"><?php echo $days; ?></td>
							<td style="text-align:right;"><?php if($days > 0 and $days <= 30){echo number_format((float)$record->TotalBalance, 2, '.', ',');} ?></td>
							<td style="text-align:right;"><?php if($days > 30 and $days <= 60){echo number_format((float)$record->TotalBalance, 2, '.', ',');} ?></td>
							<td style="text-align:right;"><?php if($days > 60 and $days <= 90){echo number_format((float)$record->TotalBalance, 2, '.', ',');} ?></td>
							<td style="text-align:right;"><?php if($days > 90 and $days <= 120){echo number_format((float)$record->TotalBalance, 2, '.', ',');} ?></td>
							<td style="text-align:right;"><?php if($days > 120){echo number_format((float)$record->TotalBalance, 2, '.', ',');} ?></td>
							<td style="border:none;"></td>
							<?php
								if($days > 0 and $days <= 30){
									$thirty = $thirty + $record->TotalBalance; 
								}elseif($days > 30 and $days <= 60 ){
									$sixty = $sixty + $record->TotalBalance;
								}elseif($days > 60 and $days <= 90 ){
									$ninety = $ninety + $record->TotalBalance;
								}elseif($days > 90 and $days <= 120 ){
									$onetweny = $onetweny + $record->TotalBalance;
								}elseif($days > 120){
									$above = $above + $record->TotalBalance;
								}
							?>
							<?php $member_count = $member_count + 1; ?>
						</tr>
						<?php endforeach; ?>
						<tr>
							<td style="font-weight:bold;">Total Item/ SOA: <?php echo $member_count; ?></td>
							<td colspan="2" style="font-weight:bold;">TOTAL</td>
							<td style="font-weight:bold;"></td>
							<td style="font-weight:bold;text-align:right;"><?php echo number_format((float)$thirty, 2, '.', ','); ?></td>
							<td style="font-weight:bold;text-align:right;"><?php echo number_format((float)$sixty, 2, '.', ','); ?></td>
							<td style="font-weight:bold;text-align:right;"><?php echo number_format((float)$ninety, 2, '.', ','); ?></td>
							<td style="font-weight:bold;text-align:right;"><?php echo number_format((float)$onetweny, 2, '.', ','); ?></td>
							<td style="font-weight:bold;text-align:right;"><?php echo number_format((float)$above, 2, '.', ','); ?></td>
							<td style="font-weight:bold;text-align:right;"><?php echo number_format((float)$thirty + $sixty + $ninety + $onetweny + $above, 2, '.', ','); ?></td>
						</tr>
					</tbody>
				</table>
				<br>
				<br>
				<br>
				<br>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;">Prepared By:</td>
						<td></td>
						<td style="font-weight:bold;">Noted By:</td>
					</tr>
					<tr>
						<td style="padding-left:10%;"><?php echo $prepared_by; ?></td>
						<td></td>
						<td style=""></td>
					</tr>
				</table>
			</div>
			<?php endif; ?>
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
				<div style="text-align: center;font-weight:bold;font-size:90%;">
					<!-- Page {PAGENO} of {nbpg} -->
				</div>
			</htmlpagefooter>
		</body>
	</html>