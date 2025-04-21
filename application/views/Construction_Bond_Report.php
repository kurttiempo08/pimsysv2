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
			<?php //if($records): ?>
			<div class="half_me">
				<h4 style="text-align:center;"><b>PUEBLO GOLF ESTATES HOMEOWNERS ASSOCIATION, INC.</b></h4>
				<p style="text-align:center;">Masterson Avenue, Upper Canitoan, Cagayan de Oro City, 9000</p>
				<p style="text-align:center;">Contact No.: 09551367134&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: pgehai.bod@gmail.com</p>
				<br>
				<h3 style="text-align:center;"><b>CONSTRUCTION BOND REPORT<br><br>As of <?php echo date('F j, Y'); ?></b></h3>
				<br>
				<table width="100%" border="1">
					<thdead>
						<tr>
							<th style="text-align:center;" colspan="4">CONSTRUCTION BOND DEPOSIT</th>
							<th style="text-align:center;" colspan="4">LESS CHARGES/VIOLATIONS</th>
							<th style="text-align:center;">ISSUANCE/ WITHDRAWAL</th>
							<th style="text-align:center;">ISSUANCE/ WITHDRAWAL</th>
							<th style="text-align:center;">ISSUANCE/ WITHDRAWAL</th>
						</tr>
					</thdead>
					<tbody>
						<tr>
							
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
						<td style="padding-left:10%;"><?php //echo $prepared_by; ?></td>
						<td></td>
						<td style=""></td>
					</tr>
				</table>
			</div>
			<?php //endif; ?>
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
				<div style="text-align: center;font-weight:bold;font-size:90%;">
					<!-- Page {PAGENO} of {nbpg} -->
				</div>
			</htmlpagefooter>
		</body>
	</html>