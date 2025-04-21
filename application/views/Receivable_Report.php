	<?php
	header('Content-type: application/excel');
	$filename = 'AdjustmentReport-'. date('mdY') .'.xls';
	header('Content-Disposition: attachment; filename='.$filename);
	date_default_timezone_set('Asia/Manila');
	if($records){
		$grand_total = 0;
		$member_count = 0;
		$months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	}
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
				font-size: 85%;
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
			<div>
				<h4 style="text-align:center;"><b>PUEBLO GOLF ESTATES HOMEOWNERS ASSOCIATION, INC.</b></h4>
				<p style="text-align:center;">Masterson Avenue, Upper Canitoan, Cagayan de Oro City, 9000</p>
				<p style="text-align:center;">Contact No.: 09551367134&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: pgehai.bod@gmail.com</p>
				<br>
				<h3 style="text-align:center;"><b>ACCOUNTS RECEIVABLE DETAIL REPORT<br><br><?php echo $months[(int)$xMonth] . " " . $xYear; ?></b></h3>
				<br>
				<table width="100%" border=1>
					<thdead>
						<tr>
							<th>Contract#</th>
							<th>SOANo</th>
							<th>Last Name/ COMPANY NAME/ RENTER NAME</th>
							<th>First Name</th>
							<th>Middle Name</th>
							<th>Ext Name</th>
							<th>BLK-LOT/CLUSTER</th>
							<th>TYPE</th>
							<th>Amount Due</th>
						</tr>
					</thdead>
					<tbody>
						<?php foreach($records as $record): ?>
						<tr>
							<?php $member_id = "PGEHAI-" . $record->MHOLID; ?>
							<?php $renter = $record->Renter ? "/" . $record->Renter : ""; ?>
							<td><?php echo $record->Contract_no ? $record->Contract_no : $member_id ?></td>
							<td><?php echo $record->xYear . $record->xMonth . "-" . $record->MHOLID; ?></td>
							<td colspan="4"><?php echo $record->LastName . ", " . $record->FirstName . " " . $record->MiddleName . " " . $record->ExtName . $renter; ?></td>
							<td><?php echo "BLK" . $record->BlockNo . "-LOT" . $record->LotNo . "/" . $record->PhaseCluster; ?></td>
							<td><?php echo $record->Type; ?></td>
							<td style="text-align:right;"><?php echo number_format((float)$record->SumDebitAmt, 2, '.', ','); ?></td>
						</tr>
						<?php $member_count = $member_count + 1; ?>
						<?php $grand_total = $grand_total + $record->SumDebitAmt; ?>
						<?php endforeach; ?>
						<tr>
							<td colspan="2"></td>
							<td colspan="5" style="font-weight:bold;">Total Member/ Property: <?php echo $member_count; ?></td>
							<td style="font-weight:bold;">GRAND TOTAL</td>
							<td style="text-align:right;"><?php echo number_format((float)$grand_total, 2, '.', ','); ?></td>
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
						<td style=""></td>
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